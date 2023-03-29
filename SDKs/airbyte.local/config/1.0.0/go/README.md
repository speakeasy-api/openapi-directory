# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/airbyte.local/config/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateConnectionRequest{
        Request: shared.ConnectionCreate{
            DestinationID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
            Name: "est",
            NamespaceDefinition: "source",
            NamespaceFormat: "${SOURCE_NAMESPACE}",
            OperationIds: []string{
                "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
                "39205929-396f-4ea7-996e-b10faaa2352c",
            },
            Prefix: "ipsam",
            ResourceRequirements: &shared.ResourceRequirements{
                CPULimit: "est",
                CPURequest: "commodi",
                MemoryLimit: "quia",
                MemoryRequest: "similique",
            },
            Schedule: &shared.ConnectionSchedule{
                TimeUnit: "minutes",
                Units: 438601,
            },
            SourceID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
            Status: "active",
            SyncCatalog: &shared.AirbyteCatalog{
                Streams: []shared.AirbyteStreamAndConfiguration{
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "quo",
                            CursorField: []string{
                                "explicabo",
                                "aut",
                                "reiciendis",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "reiciendis",
                                    "illo",
                                    "id",
                                },
                                []string{
                                    "quod",
                                    "sit",
                                },
                            },
                            Selected: false,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "veniam",
                                "reiciendis",
                            },
                            JSONSchema: map[string]interface{}{
                                "ea": "exercitationem",
                            },
                            Name: "deleniti",
                            Namespace: "sed",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "aut",
                                    "esse",
                                },
                                []string{
                                    "veritatis",
                                    "numquam",
                                    "eligendi",
                                    "error",
                                },
                                []string{
                                    "et",
                                    "ut",
                                    "molestias",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                                "full_refresh",
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "in",
                            CursorField: []string{
                                "non",
                            },
                            DestinationSyncMode: "append",
                            PrimaryKey: [][]string{
                                []string{
                                    "libero",
                                },
                                []string{
                                    "magni",
                                    "est",
                                    "porro",
                                    "voluptas",
                                },
                            },
                            Selected: false,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "sit",
                                "in",
                            },
                            JSONSchema: map[string]interface{}{
                                "omnis": "voluptatem",
                                "dolorem": "eum",
                                "quis": "consequatur",
                            },
                            Name: "ratione",
                            Namespace: "cum",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "nihil",
                                    "id",
                                },
                                []string{
                                    "sapiente",
                                    "et",
                                },
                                []string{
                                    "possimus",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "incremental",
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "sunt",
                            CursorField: []string{
                                "modi",
                                "necessitatibus",
                                "tenetur",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "nulla",
                                    "reiciendis",
                                },
                                []string{
                                    "fugit",
                                    "ullam",
                                    "voluptas",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "qui",
                                "cum",
                            },
                            JSONSchema: map[string]interface{}{
                                "magnam": "culpa",
                                "enim": "aut",
                                "delectus": "eligendi",
                                "officia": "est",
                            },
                            Name: "distinctio",
                            Namespace: "et",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "incidunt",
                                    "facilis",
                                    "qui",
                                    "nihil",
                                },
                                []string{
                                    "id",
                                    "voluptatum",
                                    "sit",
                                },
                                []string{
                                    "corporis",
                                    "porro",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "full_refresh",
                                "full_refresh",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Connection.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionRead != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Connection

* `CreateConnection` - Create a connection between a source and a destination
* `DeleteConnection` - Delete a connection
* `GetConnection` - Get a connection
* `GetState` - Fetch the current state for a connection.
* `ListConnectionsForWorkspace` - Returns all connections for a workspace.
* `ResetConnection` - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* `SyncConnection` - Trigger a manual sync of the connection
* `UpdateConnection` - Update a connection

### Deployment

* `ExportArchive` - Export Airbyte Configuration and Data Archive
* `ImportArchive` - Import Airbyte Configuration and Data Archive

### Destination

* `CheckConnectionToDestination` - Check connection to the destination
* `CheckConnectionToDestinationForUpdate` - Check connection for a proposed update to a destination
* `CreateDestination` - Create a destination
* `DeleteDestination` - Delete the destination
* `GetDestination` - Get configured destination
* `ListDestinationsForWorkspace` - List configured destinations for a workspace
* `UpdateDestination` - Update a destination

### DestinationDefinition

* `CreateDestinationDefinition` - Creates a destinationsDefinition
* `GetDestinationDefinition` - Get destinationDefinition
* `ListDestinationDefinitions` - List all the destinationDefinitions the current Airbyte deployment is configured to use
* `ListLatestDestinationDefinitions` - List the latest destinationDefinitions Airbyte supports
* `UpdateDestinationDefinition` - Update destinationDefinition

### DestinationDefinitionSpecification

* `GetDestinationDefinitionSpecification` - Get specification for a destinationDefinition

### Health

* `GetHealthCheck` - Health Check

### Jobs

* `CancelJob` - Cancels a job
* `GetJobInfo` - Get information about a job
* `ListJobsFor` - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### Logs

* `GetLogs` - Get logs

### Notifications

* `TryNotificationConfig` - Try sending a notifications

### Openapi

* `GetOpenAPISpec` - Returns the openapi specification

### Operation

* `CheckOperation` - Check if an operation to be created is valid
* `CreateOperation` - Create an operation to be applied as part of a connection pipeline
* `DeleteOperation` - Delete an operation
* `GetOperation` - Returns an operation
* `ListOperationsForConnection` - Returns all operations for a connection.
* `UpdateOperation` - Update an operation

### Scheduler

* `ExecuteDestinationCheckConnection` - Run check connection for a given destination configuration
* `ExecuteSourceCheckConnection` - Run check connection for a given source configuration
* `ExecuteSourceDiscoverSchema` - Run discover schema for a given source a source configuration

### Source

* `CheckConnectionToSource` - Check connection to the source
* `CheckConnectionToSourceForUpdate` - Check connection for a proposed update to a source
* `CreateSource` - Create a source
* `DeleteSource` - Delete a source
* `DiscoverSchemaForSource` - Discover the schema catalog of the source
* `GetSource` - Get source
* `ListSourcesForWorkspace` - List sources for workspace
* `UpdateSource` - Update a source

### SourceDefinition

* `CreateSourceDefinition` - Creates a sourceDefinition
* `GetSourceDefinition` - Get source
* `ListLatestSourceDefinitions` - List the latest sourceDefinitions Airbyte supports
* `ListSourceDefinitions` - List all the sourceDefinitions the current Airbyte deployment is configured to use
* `UpdateSourceDefinition` - Update a sourceDefinition

### SourceDefinitionSpecification

* `GetSourceDefinitionSpecification` - Get specification for a SourceDefinition.

### WebBackend

* `WebBackendCreateConnection` - Create a connection
* `WebBackendGetConnection` - Get a connection
* `WebBackendListConnectionsForWorkspace` - Returns all connections for a workspace.
* `WebBackendRecreateDestination` - Recreate a destination
* `WebBackendRecreateSource` - Recreate a source
* `WebBackendUpdateConnection` - Update a connection

### Workspace

* `CreateWorkspace` - Creates a workspace
* `DeleteWorkspace` - Deletes a workspace
* `GetWorkspace` - Find workspace by ID
* `GetWorkspaceBySlug` - Find workspace by slug
* `ListWorkspaces` - List all workspaces registered in the current Airbyte deployment
* `UpdateWorkspace` - Update workspace state
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
