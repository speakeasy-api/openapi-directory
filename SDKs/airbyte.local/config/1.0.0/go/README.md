# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: &shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectionRequest{
        Request: shared.ConnectionCreate{
            DestinationID: "sed",
            Name: "officiis",
            NamespaceDefinition: "destination",
            NamespaceFormat: "consectetur",
            OperationIds: []string{
                "odio",
            },
            Prefix: "qui",
            ResourceRequirements: &shared.ResourceRequirements{
                CPULimit: "recusandae",
                CPURequest: "at",
                MemoryLimit: "ipsum",
                MemoryRequest: "eveniet",
            },
            Schedule: &shared.ConnectionSchedule{
                TimeUnit: "months",
                Units: 7338728586234333996,
            },
            SourceID: "inventore",
            Status: "deprecated",
            SyncCatalog: &shared.AirbyteCatalog{
                Streams: []shared.AirbyteStreamAndConfiguration{
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "aut",
                            CursorField: []string{
                                "tempore",
                            },
                            DestinationSyncMode: "append",
                            PrimaryKey: [][]string{
                                []string{
                                    "beatae",
                                    "veritatis",
                                },
                                []string{
                                    "et",
                                    "omnis",
                                    "ipsum",
                                },
                                []string{
                                    "dolores",
                                },
                            },
                            Selected: true,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "mollitia",
                                "voluptas",
                                "quam",
                            },
                            JSONSchema: map[string]interface{}{
                                "qui": "qui",
                            },
                            Name: "unde",
                            Namespace: "in",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "itaque",
                                    "ab",
                                    "neque",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "full_refresh",
                                "full_refresh",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "architecto",
                            CursorField: []string{
                                "velit",
                            },
                            DestinationSyncMode: "overwrite",
                            PrimaryKey: [][]string{
                                []string{
                                    "voluptates",
                                    "magni",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "earum",
                            },
                            JSONSchema: map[string]interface{}{
                                "omnis": "ut",
                            },
                            Name: "consequatur",
                            Namespace: "dolor",
                            SourceDefinedCursor: true,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "consectetur",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "laboriosam",
                            CursorField: []string{
                                "a",
                                "soluta",
                                "aut",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "autem",
                                },
                                []string{
                                    "expedita",
                                },
                                []string{
                                    "perferendis",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "explicabo",
                                "ea",
                                "maxime",
                            },
                            JSONSchema: map[string]interface{}{
                                "perferendis": "et",
                            },
                            Name: "rerum",
                            Namespace: "reiciendis",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "necessitatibus",
                                },
                                []string{
                                    "quis",
                                    "eum",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Connection.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionRead != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### connection

* `CreateConnection` - Create a connection between a source and a destination
* `DeleteConnection` - Delete a connection
* `GetConnection` - Get a connection
* `GetState` - Fetch the current state for a connection.
* `ListConnectionsForWorkspace` - Returns all connections for a workspace.
* `ResetConnection` - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* `SyncConnection` - Trigger a manual sync of the connection
* `UpdateConnection` - Update a connection

### deployment

* `ExportArchive` - Export Airbyte Configuration and Data Archive
* `ImportArchive` - Import Airbyte Configuration and Data Archive

### destination

* `CheckConnectionToDestination` - Check connection to the destination
* `CheckConnectionToDestinationForUpdate` - Check connection for a proposed update to a destination
* `CreateDestination` - Create a destination
* `DeleteDestination` - Delete the destination
* `GetDestination` - Get configured destination
* `ListDestinationsForWorkspace` - List configured destinations for a workspace
* `UpdateDestination` - Update a destination

### destination_definition

* `CreateDestinationDefinition` - Creates a destinationsDefinition
* `GetDestinationDefinition` - Get destinationDefinition
* `ListDestinationDefinitions` - List all the destinationDefinitions the current Airbyte deployment is configured to use
* `ListLatestDestinationDefinitions` - List the latest destinationDefinitions Airbyte supports
* `UpdateDestinationDefinition` - Update destinationDefinition

### destination_definition_specification

* `GetDestinationDefinitionSpecification` - Get specification for a destinationDefinition

### health

* `GetHealthCheck` - Health Check

### jobs

* `CancelJob` - Cancels a job
* `GetJobInfo` - Get information about a job
* `ListJobsFor` - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### logs

* `GetLogs` - Get logs

### notifications

* `TryNotificationConfig` - Try sending a notifications

### openapi

* `GetOpenAPISpec` - Returns the openapi specification

### operation

* `CheckOperation` - Check if an operation to be created is valid
* `CreateOperation` - Create an operation to be applied as part of a connection pipeline
* `DeleteOperation` - Delete an operation
* `GetOperation` - Returns an operation
* `ListOperationsForConnection` - Returns all operations for a connection.
* `UpdateOperation` - Update an operation

### scheduler

* `ExecuteDestinationCheckConnection` - Run check connection for a given destination configuration
* `ExecuteSourceCheckConnection` - Run check connection for a given source configuration
* `ExecuteSourceDiscoverSchema` - Run discover schema for a given source a source configuration

### source

* `CheckConnectionToSource` - Check connection to the source
* `CheckConnectionToSourceForUpdate` - Check connection for a proposed update to a source
* `CreateSource` - Create a source
* `DeleteSource` - Delete a source
* `DiscoverSchemaForSource` - Discover the schema catalog of the source
* `GetSource` - Get source
* `ListSourcesForWorkspace` - List sources for workspace
* `UpdateSource` - Update a source

### source_definition

* `CreateSourceDefinition` - Creates a sourceDefinition
* `GetSourceDefinition` - Get source
* `ListLatestSourceDefinitions` - List the latest sourceDefinitions Airbyte supports
* `ListSourceDefinitions` - List all the sourceDefinitions the current Airbyte deployment is configured to use
* `UpdateSourceDefinition` - Update a sourceDefinition

### source_definition_specification

* `GetSourceDefinitionSpecification` - Get specification for a SourceDefinition.

### web_backend

* `WebBackendCreateConnection` - Create a connection
* `WebBackendGetConnection` - Get a connection
* `WebBackendListConnectionsForWorkspace` - Returns all connections for a workspace.
* `WebBackendRecreateDestination` - Recreate a destination
* `WebBackendRecreateSource` - Recreate a source
* `WebBackendUpdateConnection` - Update a connection

### workspace

* `CreateWorkspace` - Creates a workspace
* `DeleteWorkspace` - Deletes a workspace
* `GetWorkspace` - Find workspace by ID
* `GetWorkspaceBySlug` - Find workspace by slug
* `ListWorkspaces` - List all workspaces registered in the current Airbyte deployment
* `UpdateWorkspace` - Update workspace state

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
