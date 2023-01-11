# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConnectionRequest req = new CreateConnectionRequest() {{
                request = new ConnectionCreate() {{
                    destinationId = "sed";
                    name = "officiis";
                    namespaceDefinition = "destination";
                    namespaceFormat = "consectetur";
                    operationIds = new String[]() {{
                        add("odio"),
                    }};
                    prefix = "qui";
                    resourceRequirements = new ResourceRequirements() {{
                        cpuLimit = "recusandae";
                        cpuRequest = "at";
                        memoryLimit = "ipsum";
                        memoryRequest = "eveniet";
                    }};
                    schedule = new ConnectionSchedule() {{
                        timeUnit = "months";
                        units = 7338728586234333996;
                    }};
                    sourceId = "inventore";
                    status = "deprecated";
                    syncCatalog = new AirbyteCatalog() {{
                        streams = new openapisdk.models.shared.AirbyteStreamAndConfiguration[]() {{
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "aut";
                                    cursorField = new String[]() {{
                                        add("tempore"),
                                    }};
                                    destinationSyncMode = "append";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("beatae"),
                                            add("veritatis"),
                                        }}),
                                        add(new String[]() {{
                                            add("et"),
                                            add("omnis"),
                                            add("ipsum"),
                                        }}),
                                        add(new String[]() {{
                                            add("dolores"),
                                        }}),
                                    }};
                                    selected = true;
                                    syncMode = "full_refresh";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("mollitia"),
                                        add("voluptas"),
                                        add("quam"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("qui", "qui");
                                    }};
                                    name = "unde";
                                    namespace = "in";
                                    sourceDefinedCursor = false;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("itaque"),
                                            add("ab"),
                                            add("neque"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("full_refresh"),
                                        add("full_refresh"),
                                        add("full_refresh"),
                                    }};
                                }};
                            }}),
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "architecto";
                                    cursorField = new String[]() {{
                                        add("velit"),
                                    }};
                                    destinationSyncMode = "overwrite";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("voluptates"),
                                            add("magni"),
                                        }}),
                                    }};
                                    selected = false;
                                    syncMode = "incremental";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("earum"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "ut");
                                    }};
                                    name = "consequatur";
                                    namespace = "dolor";
                                    sourceDefinedCursor = true;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("consectetur"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("incremental"),
                                    }};
                                }};
                            }}),
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "laboriosam";
                                    cursorField = new String[]() {{
                                        add("a"),
                                        add("soluta"),
                                        add("aut"),
                                    }};
                                    destinationSyncMode = "append_dedup";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("autem"),
                                        }}),
                                        add(new String[]() {{
                                            add("expedita"),
                                        }}),
                                        add(new String[]() {{
                                            add("perferendis"),
                                        }}),
                                    }};
                                    selected = false;
                                    syncMode = "incremental";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("explicabo"),
                                        add("ea"),
                                        add("maxime"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "et");
                                    }};
                                    name = "rerum";
                                    namespace = "reiciendis";
                                    sourceDefinedCursor = false;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("necessitatibus"),
                                        }}),
                                        add(new String[]() {{
                                            add("quis"),
                                            add("eum"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("incremental"),
                                    }};
                                }};
                            }}),
                        }};
                    }};
                }};
            }};

            CreateConnectionResponse res = sdk.connection.createConnection(req);

            if (res.connectionRead.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### connection

* `createConnection` - Create a connection between a source and a destination
* `deleteConnection` - Delete a connection
* `getConnection` - Get a connection
* `getState` - Fetch the current state for a connection.
* `listConnectionsForWorkspace` - Returns all connections for a workspace.
* `resetConnection` - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* `syncConnection` - Trigger a manual sync of the connection
* `updateConnection` - Update a connection

### deployment

* `exportArchive` - Export Airbyte Configuration and Data Archive
* `importArchive` - Import Airbyte Configuration and Data Archive

### destination

* `checkConnectionToDestination` - Check connection to the destination
* `checkConnectionToDestinationForUpdate` - Check connection for a proposed update to a destination
* `createDestination` - Create a destination
* `deleteDestination` - Delete the destination
* `getDestination` - Get configured destination
* `listDestinationsForWorkspace` - List configured destinations for a workspace
* `updateDestination` - Update a destination

### destination_definition

* `createDestinationDefinition` - Creates a destinationsDefinition
* `getDestinationDefinition` - Get destinationDefinition
* `listDestinationDefinitions` - List all the destinationDefinitions the current Airbyte deployment is configured to use
* `listLatestDestinationDefinitions` - List the latest destinationDefinitions Airbyte supports
* `updateDestinationDefinition` - Update destinationDefinition

### destination_definition_specification

* `getDestinationDefinitionSpecification` - Get specification for a destinationDefinition

### health

* `getHealthCheck` - Health Check

### jobs

* `cancelJob` - Cancels a job
* `getJobInfo` - Get information about a job
* `listJobsFor` - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### logs

* `getLogs` - Get logs

### notifications

* `tryNotificationConfig` - Try sending a notifications

### openapi

* `getOpenApiSpec` - Returns the openapi specification

### operation

* `checkOperation` - Check if an operation to be created is valid
* `createOperation` - Create an operation to be applied as part of a connection pipeline
* `deleteOperation` - Delete an operation
* `getOperation` - Returns an operation
* `listOperationsForConnection` - Returns all operations for a connection.
* `updateOperation` - Update an operation

### scheduler

* `executeDestinationCheckConnection` - Run check connection for a given destination configuration
* `executeSourceCheckConnection` - Run check connection for a given source configuration
* `executeSourceDiscoverSchema` - Run discover schema for a given source a source configuration

### source

* `checkConnectionToSource` - Check connection to the source
* `checkConnectionToSourceForUpdate` - Check connection for a proposed update to a source
* `createSource` - Create a source
* `deleteSource` - Delete a source
* `discoverSchemaForSource` - Discover the schema catalog of the source
* `getSource` - Get source
* `listSourcesForWorkspace` - List sources for workspace
* `updateSource` - Update a source

### source_definition

* `createSourceDefinition` - Creates a sourceDefinition
* `getSourceDefinition` - Get source
* `listLatestSourceDefinitions` - List the latest sourceDefinitions Airbyte supports
* `listSourceDefinitions` - List all the sourceDefinitions the current Airbyte deployment is configured to use
* `updateSourceDefinition` - Update a sourceDefinition

### source_definition_specification

* `getSourceDefinitionSpecification` - Get specification for a SourceDefinition.

### web_backend

* `webBackendCreateConnection` - Create a connection
* `webBackendGetConnection` - Get a connection
* `webBackendListConnectionsForWorkspace` - Returns all connections for a workspace.
* `webBackendRecreateDestination` - Recreate a destination
* `webBackendRecreateSource` - Recreate a source
* `webBackendUpdateConnection` - Update a connection

### workspace

* `createWorkspace` - Creates a workspace
* `deleteWorkspace` - Deletes a workspace
* `getWorkspace` - Find workspace by ID
* `getWorkspaceBySlug` - Find workspace by slug
* `listWorkspaces` - List all workspaces registered in the current Airbyte deployment
* `updateWorkspace` - Update workspace state

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
