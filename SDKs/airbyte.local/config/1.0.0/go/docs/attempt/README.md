# Attempt

## Overview

Interactions with attempt related resources.

### Available Operations

* [SaveStats](#savestats) - For worker to set sync stats of a running attempt.
* [SaveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [SetWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.

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
    res, err := s.Attempt.SaveStats(ctx, shared.SaveStatsRequestBody{
        AttemptNumber: 392785,
        JobID: 925597,
        Stats: shared.AttemptStats{
            BytesEmitted: sdk.Int64(836079),
            EstimatedBytes: sdk.Int64(71036),
            EstimatedRecords: sdk.Int64(337396),
            RecordsCommitted: sdk.Int64(87129),
            RecordsEmitted: sdk.Int64(648172),
            StateMessagesEmitted: sdk.Int64(20218),
        },
        StreamStats: []shared.AttemptStreamStats{
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: sdk.Int64(832620),
                    EstimatedBytes: sdk.Int64(957156),
                    EstimatedRecords: sdk.Int64(778157),
                    RecordsCommitted: sdk.Int64(140350),
                    RecordsEmitted: sdk.Int64(870013),
                    StateMessagesEmitted: sdk.Int64(870088),
                },
                StreamName: "maiores",
                StreamNamespace: sdk.String("molestiae"),
            },
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: sdk.Int64(799159),
                    EstimatedBytes: sdk.Int64(800911),
                    EstimatedRecords: sdk.Int64(461479),
                    RecordsCommitted: sdk.Int64(520478),
                    RecordsEmitted: sdk.Int64(780529),
                    StateMessagesEmitted: sdk.Int64(678880),
                },
                StreamName: "dicta",
                StreamNamespace: sdk.String("nam"),
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
    res, err := s.Attempt.SaveSyncConfig(ctx, shared.SaveAttemptSyncConfigRequestBody{
        AttemptNumber: 639921,
        JobID: 582020,
        SyncConfig: shared.AttemptSyncConfig{
            DestinationConfiguration: "fugit",
            SourceConfiguration: "deleniti",
            State: &shared.ConnectionState{
                ConnectionID: "fc816742-cb73-4920-9929-396fea7596eb",
                GlobalState: &shared.GlobalState{
                    SharedState: map[string]interface{}{
                        "ipsa": "reiciendis",
                    },
                    StreamStates: []shared.StreamState{
                        shared.StreamState{
                            StreamDescriptor: shared.StreamDescriptor{
                                Name: "Cameron Dach",
                                Namespace: sdk.String("explicabo"),
                            },
                            StreamState: map[string]interface{}{
                                "enim": "omnis",
                                "nemo": "minima",
                                "excepturi": "accusantium",
                                "iure": "culpa",
                            },
                        },
                        shared.StreamState{
                            StreamDescriptor: shared.StreamDescriptor{
                                Name: "Darrin Brakus",
                                Namespace: sdk.String("culpa"),
                            },
                            StreamState: map[string]interface{}{
                                "repellat": "mollitia",
                            },
                        },
                        shared.StreamState{
                            StreamDescriptor: shared.StreamDescriptor{
                                Name: "Francis Jerde",
                                Namespace: sdk.String("velit"),
                            },
                            StreamState: map[string]interface{}{
                                "quia": "quis",
                                "vitae": "laborum",
                                "animi": "enim",
                            },
                        },
                    },
                },
                State: map[string]interface{}{
                    "quo": "sequi",
                },
                StateType: shared.ConnectionStateTypeEnumNotSet,
                StreamState: []shared.StreamState{
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Miss Rufus Ankunding",
                            Namespace: sdk.String("laborum"),
                        },
                        StreamState: map[string]interface{}{
                            "reiciendis": "voluptatibus",
                        },
                    },
                    shared.StreamState{
                        StreamDescriptor: shared.StreamDescriptor{
                            Name: "Jessie Langosh V",
                            Namespace: sdk.String("voluptate"),
                        },
                        StreamState: map[string]interface{}{
                            "perferendis": "doloremque",
                            "reprehenderit": "ut",
                            "maiores": "dicta",
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
    res, err := s.Attempt.SetWorkflowInAttempt(ctx, shared.SetWorkflowInAttemptRequestBody{
        AttemptNumber: 359444,
        JobID: 296140,
        ProcessingTaskQueue: sdk.String("iusto"),
        WorkflowID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```
