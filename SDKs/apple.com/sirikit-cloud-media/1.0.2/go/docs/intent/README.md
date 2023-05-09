# Intent

### Available Operations

* [AddMediaIntentHandling](#addmediaintenthandling) - addMedia
* [PlayMediaIntentHandling](#playmediaintenthandling) - playMedia
* [UpdateMediaAffinityIntentHandling](#updatemediaaffinityintenthandling) - updateMediaAffinity

## AddMediaIntentHandling

addMedia

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Intent.AddMediaIntentHandling(ctx, operations.AddMediaIntentHandlingRequest{
        AcceptLanguage: "debitis",
        RequestTimeout: 567.13,
        RequestBody: []shared.AddMediaIntentHandlingInvocation{
            shared.AddMediaIntentHandlingInvocation{
                Method: "tempora",
                Params: map[string]interface{}{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(479977),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
                    Identifier: "recusandae",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("temporibus"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(710.36),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-11-30T04:44:49.578Z"),
                    Version: "deserunt",
                },
            },
            shared.AddMediaIntentHandlingInvocation{
                Method: "perferendis",
                Params: map[string]interface{}{
                    "repellendus": "sapiente",
                    "quo": "odit",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(870013),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2020-01-25T09:54:35.794Z"),
                    Identifier: "molestiae",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("quod"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(8009.11),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-06-25T00:37:01.696Z"),
                    Version: "porro",
                },
            },
            shared.AddMediaIntentHandlingInvocation{
                Method: "dolorum",
                Params: map[string]interface{}{
                    "nam": "officia",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(582020),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-06-18T20:36:37.412Z"),
                    Identifier: "hic",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("optio"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(5218.48),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-08-02T15:33:40.440Z"),
                    Version: "molestiae",
                },
            },
            shared.AddMediaIntentHandlingInvocation{
                Method: "modi",
                Params: map[string]interface{}{
                    "impedit": "cum",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(456150),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-06-07T12:31:06.574Z"),
                    Identifier: "aspernatur",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("perferendis"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(3241.41),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-09-13T17:41:46.141Z"),
                    Version: "iste",
                },
            },
        },
        UserAgent: "dolor",
        XApplecloudextensionRetryCount: sdk.Float64(6169.34),
        XApplecloudextensionSessionID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddMediaIntentHandlingInvocationResponses != nil {
        // handle response
    }
}
```

## PlayMediaIntentHandling

playMedia

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Intent.PlayMediaIntentHandling(ctx, operations.PlayMediaIntentHandlingRequest{
        AcceptLanguage: "hic",
        RequestTimeout: 9025.99,
        RequestBody: []shared.PlayMediaIntentHandlingInvocation{
            shared.PlayMediaIntentHandlingInvocation{
                Method: "in",
                Params: map[string]interface{}{
                    "iste": "iure",
                    "saepe": "quidem",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(99280),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-01-12T00:28:21.182Z"),
                    Identifier: "est",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("mollitia"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(6706.38),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-10-16T05:02:54.746Z"),
                    Version: "corporis",
                },
            },
            shared.PlayMediaIntentHandlingInvocation{
                Method: "explicabo",
                Params: map[string]interface{}{
                    "enim": "omnis",
                    "nemo": "minima",
                    "excepturi": "accusantium",
                    "iure": "culpa",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(988374),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-09-11T06:15:44.019Z"),
                    Identifier: "mollitia",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("dolorem"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(6350.59),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-01-02T17:10:32.894Z"),
                    Version: "mollitia",
                },
            },
            shared.PlayMediaIntentHandlingInvocation{
                Method: "occaecati",
                Params: map[string]interface{}{
                    "commodi": "quam",
                    "molestiae": "velit",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(623510),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
                    Identifier: "vitae",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("laborum"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(6563.3),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-11-11T13:31:01.643Z"),
                    Version: "quo",
                },
            },
        },
        UserAgent: "sequi",
        XApplecloudextensionRetryCount: sdk.Float64(9495.72),
        XApplecloudextensionSessionID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayMediaIntentHandlingInvocationResponses != nil {
        // handle response
    }
}
```

## UpdateMediaAffinityIntentHandling

updateMediaAffinity

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Intent.UpdateMediaAffinityIntentHandling(ctx, operations.UpdateMediaAffinityIntentHandlingRequest{
        AcceptLanguage: "id",
        RequestTimeout: 8209.94,
        RequestBody: []shared.UpdateMediaAffinityIntentHandlingInvocation{
            shared.UpdateMediaAffinityIntentHandlingInvocation{
                Method: "quasi",
                Params: map[string]interface{}{
                    "temporibus": "laborum",
                    "quasi": "reiciendis",
                    "voluptatibus": "vero",
                },
                Session: &shared.Session{
                    Constraints: shared.Constraints{
                        AllowExplicitContent: sdk.Bool(false),
                        MaximumQueueSegmentItemCount: sdk.Int64(468651),
                        UpdateUserTasteProfile: sdk.Bool(false),
                    },
                    Deadline: types.MustTimeFromString("2021-01-17T23:08:44.457Z"),
                    Identifier: "ipsa",
                    PlayerContext: &shared.PlayerContext{
                        ActivityIdentifier: sdk.String("omnis"),
                        ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                        OffsetInMillis: sdk.Int64(10942),
                        PlaybackSpeed: sdk.Float64(4511.59),
                        QueueIdentifier: sdk.String("u104823q8201"),
                    },
                    Requested: types.MustTimeFromString("2022-12-17T09:48:56.551Z"),
                    Version: "doloremque",
                },
            },
        },
        UserAgent: "reprehenderit",
        XApplecloudextensionRetryCount: sdk.Float64(2828.07),
        XApplecloudextensionSessionID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMediaAffinityIntentHandlingInvocationResponses != nil {
        // handle response
    }
}
```
