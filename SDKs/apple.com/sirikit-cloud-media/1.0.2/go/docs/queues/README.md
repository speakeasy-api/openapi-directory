# Queues

### Available Operations

* [PlayMediaOnQueue](#playmediaonqueue) - playMedia
* [UpdateActivityOnQueue](#updateactivityonqueue) - updateActivity

## PlayMediaOnQueue

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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.PlayMediaOnQueue(ctx, operations.PlayMediaOnQueueRequest{
        AcceptLanguage: "dicta",
        PlayMediaRequest: &shared.PlayMediaRequest{
            Constraints: shared.Constraints{
                AllowExplicitContent: sdk.Bool(false),
                MaximumQueueSegmentItemCount: sdk.Int64(359444),
                UpdateUserTasteProfile: sdk.Bool(false),
            },
            UserActivity: shared.UserActivity{
                ActivityType: "com.mediastreamingservice.playmedia",
                PersistentIdentifier: sdk.String("dolore"),
                Title: sdk.String("Ms."),
                UserInfo: map[string]interface{}{
                    "harum": "enim",
                },
                Version: "accusamus",
            },
            Version: "commodi",
        },
        UserAgent: "repudiandae",
        XApplecloudextensionRetryCount: sdk.Float64(641.47),
        XApplecloudextensionSessionID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## UpdateActivityOnQueue

updateActivity

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
    res, err := s.Queues.UpdateActivityOnQueue(ctx, operations.UpdateActivityOnQueueRequest{
        AcceptLanguage: "quidem",
        UpdateActivityRequest: &shared.UpdateActivityRequest{
            Constraints: &shared.Constraints{
                AllowExplicitContent: sdk.Bool(false),
                MaximumQueueSegmentItemCount: sdk.Int64(565189),
                UpdateUserTasteProfile: sdk.Bool(false),
            },
            NowPlaying: &shared.PlayerContext{
                ActivityIdentifier: sdk.String("excepturi"),
                ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                OffsetInMillis: sdk.Int64(10942),
                PlaybackSpeed: sdk.Float64(8651.03),
                QueueIdentifier: sdk.String("u104823q8201"),
            },
            PreviouslyPlaying: &shared.PlayerContext{
                ActivityIdentifier: sdk.String("modi"),
                ContentIdentifier: sdk.String("j15f8A3cuU0GG"),
                OffsetInMillis: sdk.Int64(10942),
                PlaybackSpeed: sdk.Float64(5089.69),
                QueueIdentifier: sdk.String("u104823q8201"),
            },
            Report: shared.QueueActivityReportEventEnumLocalPlayingTransitionedSkipNext,
            Timestamp: types.MustTimeFromString("2022-09-20T03:14:35.704Z"),
            UserActivity: shared.UserActivity{
                ActivityType: "com.mediastreamingservice.playmedia",
                PersistentIdentifier: sdk.String("repudiandae"),
                Title: sdk.String("Ms."),
                UserInfo: map[string]interface{}{
                    "itaque": "incidunt",
                },
                Version: "enim",
            },
            Version: "consequatur",
        },
        UserAgent: "est",
        XApplecloudextensionRetryCount: sdk.Float64(8423.42),
        XApplecloudextensionSessionID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateActivityResponse != nil {
        // handle response
    }
}
```
