# Internal

### Available Operations

* [CreateOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [GetAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [SaveStats](#savestats) - For worker to set sync stats of a running attempt.
* [SaveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [SetWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.
* [WriteDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## CreateOrUpdateState

Create or update the state for a connection.

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
    res, err := s.Internal.CreateOrUpdateState(ctx, shared.ConnectionStateCreateOrUpdate{
        ConnectionID: "00dec001-ac80-42e2-ac09-ff8f0f816ff3",
        ConnectionState: shared.ConnectionState{
            ConnectionID: "477c13e9-02c1-4412-9b09-60a668151a47",
            GlobalState: &shared.GlobalState{
                SharedState: map[string]interface{}{
                    "deserunt": "delectus",
                },
                StreamStates: []shared.StreamState{
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Peggy Schneider",
                            Namespace: sdk.String("aliquam"),
                        },
                        StreamState: map[string]interface{}{
                            "maiores": "laudantium",
                            "velit": "reiciendis",
                            "amet": "nemo",
                        },
                    },
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Adrienne White",
                            Namespace: sdk.String("aliquid"),
                        },
                        StreamState: map[string]interface{}{
                            "a": "nobis",
                            "perspiciatis": "accusantium",
                            "dicta": "minus",
                            "commodi": "eveniet",
                        },
                    },
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Geoffrey Powlowski",
                            Namespace: sdk.String("fugit"),
                        },
                        StreamState: map[string]interface{}{
                            "sequi": "eligendi",
                            "asperiores": "esse",
                        },
                    },
                },
            },
            State: map[string]interface{}{
                "sint": "repellat",
                "a": "animi",
                "maiores": "itaque",
            },
            StateType: shared.ConnectionStateTypeEnumNotSet,
            StreamState: []shared.StreamState{
                shared.StreamState{
                    StreamDescriptor: shared.StreamDescriptor{
                        Name: "Sheila Torphy",
                        Namespace: sdk.String("saepe"),
                    },
                    StreamState: map[string]interface{}{
                        "repudiandae": "accusantium",
                        "officia": "impedit",
                    },
                },
                shared.StreamState{
                    StreamDescriptor: shared.StreamDescriptor{
                        Name: "Mattie Gibson",
                        Namespace: sdk.String("nobis"),
                    },
                    StreamState: map[string]interface{}{
                        "minus": "quia",
                        "magnam": "reprehenderit",
                        "quod": "quos",
                    },
                },
                shared.StreamState{
                    StreamDescriptor: shared.StreamDescriptor{
                        Name: "Allen Kozey",
                        Namespace: sdk.String("modi"),
                    },
                    StreamState: map[string]interface{}{
                        "necessitatibus": "architecto",
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionState != nil {
        // handle response
    }
}
```

## GetAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

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
    res, err := s.Internal.GetAttemptNormalizationStatusesForJob(ctx, shared.JobIDRequestBody{
        ID: 564627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttemptNormalizationStatusReadList != nil {
        // handle response
    }
}
```

## SaveStats

For worker to set sync stats of a running attempt.

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
    res, err := s.Internal.SaveStats(ctx, shared.SaveStatsRequestBody{
        AttemptNumber: 292177,
        JobID: 125811,
        Stats: shared.AttemptStats{
            BytesEmitted: sdk.Int64(982991),
            EstimatedBytes: sdk.Int64(205011),
            EstimatedRecords: sdk.Int64(139745),
            RecordsCommitted: sdk.Int64(936845),
            RecordsEmitted: sdk.Int64(330596),
            StateMessagesEmitted: sdk.Int64(373106),
        },
        StreamStats: []shared.AttemptStreamStats{
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: sdk.Int64(350387),
                    EstimatedBytes: sdk.Int64(331269),
                    EstimatedRecords: sdk.Int64(469994),
                    RecordsCommitted: sdk.Int64(320326),
                    RecordsEmitted: sdk.Int64(394161),
                    StateMessagesEmitted: sdk.Int64(946808),
                },
                StreamName: "quis",
                StreamNamespace: sdk.String("quibusdam"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```

## SaveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

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
    res, err := s.Internal.SaveSyncConfig(ctx, shared.SaveAttemptSyncConfigRequestBody{
        AttemptNumber: 366480,
        JobID: 382764,
        SyncConfig: shared.AttemptSyncConfig{
            DestinationConfiguration: "pariatur",
            SourceConfiguration: "sit",
            State: &shared.ConnectionState{
                ConnectionID: "bd0af2df-e13d-4b4f-a2cb-a3f8941aebc0",
                GlobalState: &shared.GlobalState{
                    SharedState: map[string]interface{}{
                        "corrupti": "eaque",
                        "deserunt": "aliquid",
                        "excepturi": "magni",
                    },
                    StreamStates: []shared.StreamState{
                        shared.StreamState{
                            StreamDescriptor: shared.StreamDescriptor{
                                Name: "Rodney Prohaska",
                                Namespace: sdk.String("optio"),
                            },
                            StreamState: map[string]interface{}{
                                "minus": "quo",
                                "quos": "asperiores",
                                "voluptatum": "iste",
                                "corporis": "accusantium",
                            },
                        },
                        shared.StreamState{
                            StreamDescriptor: shared.StreamDescriptor{
                                Name: "Susan Wyman",
                                Namespace: sdk.String("possimus"),
                            },
                            StreamState: map[string]interface{}{
                                "pariatur": "vel",
                            },
                        },
                    },
                },
                State: map[string]interface{}{
                    "mollitia": "quae",
                    "quos": "aperiam",
                    "non": "voluptates",
                    "ad": "aliquam",
                },
                StateType: shared.ConnectionStateTypeEnumNotSet,
                StreamState: []shared.StreamState{
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Ebony Bode",
                            Namespace: sdk.String("est"),
                        },
                        StreamState: map[string]interface{}{
                            "aliquid": "consectetur",
                        },
                    },
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Ian Legros",
                            Namespace: sdk.String("recusandae"),
                        },
                        StreamState: map[string]interface{}{
                            "blanditiis": "numquam",
                            "sequi": "voluptatum",
                        },
                    },
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Olivia Boehm",
                            Namespace: sdk.String("quidem"),
                        },
                        StreamState: map[string]interface{}{
                            "porro": "deserunt",
                            "magni": "nihil",
                            "voluptas": "animi",
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```

## SetWorkflowInAttempt

For worker to register the workflow id in attempt.

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
    res, err := s.Internal.SetWorkflowInAttempt(ctx, shared.SetWorkflowInAttemptRequestBody{
        AttemptNumber: 413780,
        JobID: 716,
        ProcessingTaskQueue: sdk.String("fuga"),
        WorkflowID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```

## WriteDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

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
    res, err := s.Internal.WriteDiscoverCatalogResult(ctx, shared.SourceDiscoverSchemaWriteRequestBody{
        Catalog: shared.AirbyteCatalog{
            Streams: []shared.AirbyteStreamAndConfiguration{
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("maxime"),
                        CursorField: []string{
                            "iste",
                            "ullam",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppendDedup,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "occaecati",
                                "unde",
                            },
                            []string{
                                "nihil",
                            },
                            []string{
                                "libero",
                            },
                            []string{
                                "quasi",
                                "cumque",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "facere",
                                    "facilis",
                                    "beatae",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "labore",
                            "expedita",
                            "corrupti",
                            "rem",
                        },
                        JSONSchema: map[string]interface{}{
                            "officiis": "cum",
                            "pariatur": "sapiente",
                            "quo": "incidunt",
                        },
                        Name: "Kim Sauer",
                        Namespace: sdk.String("occaecati"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "esse",
                                "hic",
                                "maxime",
                                "accusantium",
                            },
                            []string{
                                "fugit",
                                "pariatur",
                                "eligendi",
                            },
                            []string{
                                "veritatis",
                                "aut",
                                "laudantium",
                                "iusto",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("tempora"),
                        CursorField: []string{
                            "rerum",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppend,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "at",
                                "eum",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "blanditiis",
                                    "nihil",
                                    "atque",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "deserunt",
                                    "atque",
                                    "nostrum",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "est",
                        },
                        JSONSchema: map[string]interface{}{
                            "rem": "magni",
                            "quae": "quas",
                        },
                        Name: "Lloyd Grant",
                        Namespace: sdk.String("delectus"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "cumque",
                                "natus",
                                "quaerat",
                            },
                            []string{
                                "quia",
                                "officiis",
                                "mollitia",
                                "cumque",
                            },
                            []string{
                                "enim",
                                "eum",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumFullRefresh,
                        },
                    },
                },
            },
        },
        ConfigurationHash: sdk.String("sit"),
        ConnectorVersion: sdk.String("odio"),
        SourceID: sdk.String("cfee8120-6e28-413f-a4a4-1c480d3f2132"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverCatalogResult != nil {
        // handle response
    }
}
```
