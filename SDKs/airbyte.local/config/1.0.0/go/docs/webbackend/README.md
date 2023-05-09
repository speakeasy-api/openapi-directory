# WebBackend

## Overview

Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
guaranteeing any backwards compatibility.


### Available Operations

* [GetStateType](#getstatetype) - Fetch the current state type for a connection.
* [WebBackendCheckUpdates](#webbackendcheckupdates) - Returns a summary of source and destination definitions that could be updated.
* [WebBackendCreateConnection](#webbackendcreateconnection) - Create a connection
* [WebBackendGetConnection](#webbackendgetconnection) - Get a connection
* [WebBackendGetWorkspaceState](#webbackendgetworkspacestate) - Returns the current state of a workspace
* [WebBackendListConnectionsForWorkspace](#webbackendlistconnectionsforworkspace) - Returns all non-deleted connections for a workspace.
* [WebBackendListGeographies](#webbackendlistgeographies) - Returns available geographies can be selected to run data syncs in a particular geography.
The 'auto' entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior. Entries other than 'auto' are two-letter country codes that
follow the ISO 3166-1 alpha-2 standard.

* [WebBackendUpdateConnection](#webbackendupdateconnection) - Update a connection

## GetStateType

Fetch the current state type for a connection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.GetStateType(ctx, shared.ConnectionIDRequestBody{
        ConnectionID: "4444573f-ecd4-4735-bf63-c8209379aa69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionStateType != nil {
        // handle response
    }
}
```

## WebBackendCheckUpdates

Returns a summary of source and destination definitions that could be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendCheckUpdates(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendCheckUpdatesRead != nil {
        // handle response
    }
}
```

## WebBackendCreateConnection

Create a connection

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendCreateConnection(ctx, shared.WebBackendConnectionCreate{
        DestinationID: "cd5fbcf7-9da1-48a7-822b-f95894e6861a",
        Geography: shared.GeographyEnumEu.ToPointer(),
        Name: sdk.String("Pedro Haley"),
        NamespaceDefinition: shared.NamespaceDefinitionTypeEnumCustomformat.ToPointer(),
        NamespaceFormat: sdk.String("${SOURCE_NAMESPACE}"),
        NonBreakingChangesPreference: shared.NonBreakingChangesPreferenceEnumIgnore.ToPointer(),
        OperationIds: []string{
            "751c9fe8-f750-42bf-9c34-50841f176445",
            "6379f3fb-27e2-41f8-a265-7b36fc6b9f58",
            "7ce525c6-7641-4a83-92e5-047b4c21ccb4",
            "23abcdc9-1faa-4bdd-88e7-1f6c48252d77",
        },
        Operations: []shared.OperationCreate{
            shared.OperationCreate{
                Name: "Olive Klocko",
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("perferendis"),
                        DockerImage: sdk.String("in"),
                        GitRepoBranch: sdk.String("eius"),
                        GitRepoURL: "aut",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumNormalization,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 611485,
                            JobID: 881413,
                        },
                        ExecutionBody: sdk.String("repellat"),
                        ExecutionURL: sdk.String("voluptatum"),
                        WebhookConfigID: sdk.String("d29de1dd-7097-4b5d-a08c-57fa6c78a216"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "e19bafec-a619-4149-8140-b64ff8ae170e",
            },
            shared.OperationCreate{
                Name: "Donald Ernser",
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("a"),
                        DockerImage: sdk.String("neque"),
                        GitRepoBranch: sdk.String("nihil"),
                        GitRepoURL: "recusandae",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumNormalization,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 652013,
                            JobID: 651504,
                        },
                        ExecutionBody: sdk.String("blanditiis"),
                        ExecutionURL: sdk.String("suscipit"),
                        WebhookConfigID: sdk.String("85559667-32aa-45dc-b668-2cb70f8cfd5f"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "b6e91b9a-9f74-4846-a2c3-309db0536d9e",
            },
        },
        Prefix: sdk.String("nihil"),
        ResourceRequirements: &shared.ResourceRequirements{
            CPULimit: sdk.String("ad"),
            CPURequest: sdk.String("eligendi"),
            MemoryLimit: sdk.String("fuga"),
            MemoryRequest: sdk.String("consequatur"),
        },
        Schedule: &shared.ConnectionSchedule{
            TimeUnit: shared.ConnectionScheduleTimeUnitEnumMinutes,
            Units: 434632,
        },
        ScheduleData: &shared.ConnectionScheduleData{
            BasicSchedule: &shared.ConnectionScheduleDataBasicSchedule{
                TimeUnit: shared.ConnectionScheduleDataBasicScheduleTimeUnitEnumMonths,
                Units: 337581,
            },
            Cron: &shared.ConnectionScheduleDataCron{
                CronExpression: "dolorem",
                CronTimeZone: "omnis",
            },
        },
        ScheduleType: shared.ConnectionScheduleTypeEnumManual.ToPointer(),
        SourceCatalogID: sdk.String("c11a25a8-bf92-4f97-828a-d9a9f8bf8221"),
        SourceID: "125359d9-8387-4f7a-b9cd-72cd2484da21",
        Status: shared.ConnectionStatusEnumInactive,
        SyncCatalog: &shared.AirbyteCatalog{
            Streams: []shared.AirbyteStreamAndConfiguration{
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("omnis"),
                        CursorField: []string{
                            "qui",
                            "similique",
                            "eligendi",
                            "numquam",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppend,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "exercitationem",
                                "nihil",
                                "quia",
                                "quis",
                            },
                            []string{
                                "dicta",
                                "dicta",
                                "eum",
                                "sint",
                            },
                            []string{
                                "nobis",
                                "quasi",
                                "itaque",
                            },
                            []string{
                                "vitae",
                                "temporibus",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "aspernatur",
                                    "neque",
                                    "impedit",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "neque",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "amet",
                                    "labore",
                                    "repellat",
                                    "eos",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "mollitia",
                            "quaerat",
                            "officia",
                            "sunt",
                        },
                        JSONSchema: map[string]interface{}{
                            "quam": "a",
                            "iure": "nulla",
                            "recusandae": "iste",
                        },
                        Name: "Judy Bosco DVM",
                        Namespace: sdk.String("saepe"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "architecto",
                                "sed",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendConnectionRead != nil {
        // handle response
    }
}
```

## WebBackendGetConnection

Get a connection

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendGetConnection(ctx, shared.WebBackendConnectionRequestBody{
        ConnectionID: "9853e9f5-43d8-4544-b9ee-224460443bc1",
        WithRefreshedCatalog: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendConnectionRead != nil {
        // handle response
    }
}
```

## WebBackendGetWorkspaceState

Returns the current state of a workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendGetWorkspaceState(ctx, shared.WebBackendWorkspaceState{
        WorkspaceID: "54188c2f-56e8-45da-b832-eabd617c3b0d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendWorkspaceStateResult != nil {
        // handle response
    }
}
```

## WebBackendListConnectionsForWorkspace

Returns all non-deleted connections for a workspace.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendListConnectionsForWorkspace(ctx, shared.WebBackendConnectionListRequestBody{
        DestinationID: []string{
            "1a44bf01-bad8-4706-9460-82bfbdc41ff5",
            "d4e2ae4f-b5cb-435d-9763-8f1edb78359e",
        },
        SourceID: []string{
            "c5cb860f-8cd5-480b-a738-10e4fe444729",
            "7cd3b1dd-3bbc-4e24-bb76-84eff50126d7",
            "1cffbd0e-b74b-4842-9953-b44bd3c43159",
            "d33e5953-c001-4139-863a-a41e6c31cc2f",
        },
        WorkspaceID: "1fcb51c9-a41f-4fbe-9cbd-795ee65e076c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendConnectionReadList != nil {
        // handle response
    }
}
```

## WebBackendListGeographies

Returns all available geographies in which a data sync can run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendListGeographies(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendGeographiesListResult != nil {
        // handle response
    }
}
```

## WebBackendUpdateConnection

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
connection along with the rest of the operationIds in the request body.
Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WebBackend.WebBackendUpdateConnection(ctx, shared.WebBackendConnectionUpdate{
        ConnectionID: "c7abf616-ea5c-4716-8193-4b90f2e09d19",
        Geography: shared.GeographyEnumEu.ToPointer(),
        Name: sdk.String("Dr. Lorene Runte"),
        NamespaceDefinition: shared.NamespaceDefinitionTypeEnumCustomformat.ToPointer(),
        NamespaceFormat: sdk.String("${SOURCE_NAMESPACE}"),
        NonBreakingChangesPreference: shared.NonBreakingChangesPreferenceEnumIgnore.ToPointer(),
        NotifySchemaChanges: sdk.Bool(false),
        Operations: []shared.WebBackendOperationCreateOrUpdate{
            shared.WebBackendOperationCreateOrUpdate{
                Name: "Barbara Hilll",
                OperationID: sdk.String("4b935d23-7a72-4f90-849d-6aed4aecb753"),
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("esse"),
                        DockerImage: sdk.String("placeat"),
                        GitRepoBranch: sdk.String("at"),
                        GitRepoURL: "excepturi",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumNormalization,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 139505,
                            JobID: 154268,
                        },
                        ExecutionBody: sdk.String("maxime"),
                        ExecutionURL: sdk.String("excepturi"),
                        WebhookConfigID: sdk.String("ff57491a-abfa-42e7-a1f0-ca4d456ef103"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "1e6899f0-c200-41e2-acd5-5cc0584a184d",
            },
            shared.WebBackendOperationCreateOrUpdate{
                Name: "Melanie Schumm",
                OperationID: sdk.String("1fc820c6-5b03-47bb-8e0c-c885187e4de0"),
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("ut"),
                        DockerImage: sdk.String("laborum"),
                        GitRepoBranch: sdk.String("hic"),
                        GitRepoURL: "sed",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumDbt,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 803763,
                            JobID: 323614,
                        },
                        ExecutionBody: sdk.String("quibusdam"),
                        ExecutionURL: sdk.String("facere"),
                        WebhookConfigID: sdk.String("db46aa1c-fd6d-4828-9a01-319112964664"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "5c1d81f2-9042-4f56-9b7a-ff0ea2216cbe",
            },
            shared.WebBackendOperationCreateOrUpdate{
                Name: "Stella Boehm",
                OperationID: sdk.String("163e279a-3b08-44da-9925-7d04f40847a7"),
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("numquam"),
                        DockerImage: sdk.String("quia"),
                        GitRepoBranch: sdk.String("repellendus"),
                        GitRepoURL: "blanditiis",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumNormalization,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 259019,
                            JobID: 585730,
                        },
                        ExecutionBody: sdk.String("nisi"),
                        ExecutionURL: sdk.String("placeat"),
                        WebhookConfigID: sdk.String("bdeecf6b-99bc-4635-a2eb-fdf55c294c06"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "0b06a128-7764-4eef-ad0c-6d6ed9c73dd6",
            },
            shared.WebBackendOperationCreateOrUpdate{
                Name: "Leslie Heaney II",
                OperationID: sdk.String("09a8e870-d3c5-4a1f-9c24-2c7b66a1f30c"),
                OperatorConfiguration: shared.OperatorConfiguration{
                    Dbt: &shared.OperatorDbt{
                        DbtArguments: sdk.String("dignissimos"),
                        DockerImage: sdk.String("non"),
                        GitRepoBranch: sdk.String("facere"),
                        GitRepoURL: "repellat",
                    },
                    Normalization: &shared.OperatorNormalization{
                        Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
                    },
                    OperatorType: shared.OperatorTypeEnumDbt,
                    Webhook: &shared.OperatorWebhook{
                        DbtCloud: &shared.OperatorWebhookDbtCloud{
                            AccountID: 693988,
                            JobID: 408208,
                        },
                        ExecutionBody: sdk.String("molestiae"),
                        ExecutionURL: sdk.String("vitae"),
                        WebhookConfigID: sdk.String("9890f42a-4bb4-438d-85b2-60591d745e3c"),
                        WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
                    },
                },
                WorkspaceID: "2059c9c3-f567-4e0e-a527-65b1d62fcdac",
            },
        },
        Prefix: sdk.String("debitis"),
        ResourceRequirements: &shared.ResourceRequirements{
            CPULimit: sdk.String("architecto"),
            CPURequest: sdk.String("reiciendis"),
            MemoryLimit: sdk.String("consequatur"),
            MemoryRequest: sdk.String("sunt"),
        },
        Schedule: &shared.ConnectionSchedule{
            TimeUnit: shared.ConnectionScheduleTimeUnitEnumMinutes,
            Units: 80673,
        },
        ScheduleData: &shared.ConnectionScheduleData{
            BasicSchedule: &shared.ConnectionScheduleDataBasicSchedule{
                TimeUnit: shared.ConnectionScheduleDataBasicScheduleTimeUnitEnumHours,
                Units: 799730,
            },
            Cron: &shared.ConnectionScheduleDataCron{
                CronExpression: "repudiandae",
                CronTimeZone: "consequuntur",
            },
        },
        ScheduleType: shared.ConnectionScheduleTypeEnumManual.ToPointer(),
        SkipReset: sdk.Bool(false),
        SourceCatalogID: sdk.String("39e8f25c-d0d1-49d9-99f4-39e39266cbd9"),
        Status: shared.ConnectionStatusEnumActive.ToPointer(),
        SyncCatalog: &shared.AirbyteCatalog{
            Streams: []shared.AirbyteStreamAndConfiguration{
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("molestiae"),
                        CursorField: []string{
                            "laborum",
                            "odit",
                            "rerum",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppend,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "et",
                            },
                            []string{
                                "nisi",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "temporibus",
                                    "et",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "nisi",
                                    "aliquid",
                                    "excepturi",
                                    "quas",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "placeat",
                                    "eligendi",
                                    "quaerat",
                                    "veniam",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "dolores",
                            "dicta",
                        },
                        JSONSchema: map[string]interface{}{
                            "maxime": "dolores",
                            "molestias": "quam",
                        },
                        Name: "Beth Klocko",
                        Namespace: sdk.String("velit"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "ad",
                            },
                            []string{
                                "alias",
                                "adipisci",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumIncremental,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("minima"),
                        CursorField: []string{
                            "molestiae",
                            "et",
                            "accusamus",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumOverwrite,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "perspiciatis",
                            },
                            []string{
                                "corporis",
                            },
                            []string{
                                "molestiae",
                                "adipisci",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "optio",
                                    "itaque",
                                    "at",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "id",
                                    "cumque",
                                    "in",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "quibusdam",
                                    "culpa",
                                    "dolor",
                                    "occaecati",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumFullRefresh,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "labore",
                            "pariatur",
                            "vel",
                        },
                        JSONSchema: map[string]interface{}{
                            "soluta": "minus",
                            "magni": "mollitia",
                        },
                        Name: "Ms. Jim Macejkovic",
                        Namespace: sdk.String("explicabo"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "occaecati",
                                "enim",
                                "tempora",
                            },
                            []string{
                                "iure",
                                "voluptatibus",
                                "id",
                            },
                            []string{
                                "explicabo",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumFullRefresh,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("nesciunt"),
                        CursorField: []string{
                            "molestias",
                            "atque",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppend,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "nemo",
                                "sequi",
                            },
                            []string{
                                "libero",
                                "ab",
                                "alias",
                                "accusantium",
                            },
                            []string{
                                "autem",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "reiciendis",
                                    "incidunt",
                                    "provident",
                                    "dolores",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "recusandae",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "magni",
                                    "sit",
                                    "voluptas",
                                    "nesciunt",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "eius",
                            "perspiciatis",
                        },
                        JSONSchema: map[string]interface{}{
                            "ex": "aliquid",
                        },
                        Name: "Wilson Ledner",
                        Namespace: sdk.String("voluptatem"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "libero",
                            },
                            []string{
                                "veritatis",
                                "provident",
                                "veniam",
                                "quos",
                            },
                            []string{
                                "facere",
                                "eius",
                                "doloremque",
                            },
                            []string{
                                "aut",
                                "sequi",
                                "reiciendis",
                                "neque",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumFullRefresh,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("natus"),
                        CursorField: []string{
                            "facilis",
                            "earum",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppend,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "consequatur",
                                "harum",
                                "nobis",
                            },
                            []string{
                                "consequatur",
                                "temporibus",
                            },
                            []string{
                                "quos",
                                "commodi",
                                "blanditiis",
                                "voluptatibus",
                            },
                            []string{
                                "nemo",
                                "ratione",
                                "dolore",
                                "perferendis",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "libero",
                                    "dolor",
                                    "nesciunt",
                                    "vitae",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "numquam",
                                    "provident",
                                    "quia",
                                    "reiciendis",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumFullRefresh,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "et",
                            "qui",
                            "iusto",
                            "a",
                        },
                        JSONSchema: map[string]interface{}{
                            "aperiam": "saepe",
                            "voluptatem": "soluta",
                            "hic": "beatae",
                        },
                        Name: "Ms. Casey Corkery",
                        Namespace: sdk.String("dignissimos"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "consequatur",
                                "similique",
                                "eligendi",
                                "impedit",
                            },
                            []string{
                                "odio",
                                "voluptate",
                                "mollitia",
                            },
                            []string{
                                "tempore",
                                "voluptate",
                                "cum",
                                "esse",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumFullRefresh,
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebBackendConnectionRead != nil {
        // handle response
    }
}
```
