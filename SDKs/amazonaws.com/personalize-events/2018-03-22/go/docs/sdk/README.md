# SDK

## Overview

Amazon Personalize can consume real-time user event data, such as <i>stream</i> or <i>click</i> data, and use it for model training either alone or combined with historical data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-events/>
### Available Operations

* [PutEvents](#putevents) - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* [PutItems](#putitems) - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* [PutUsers](#putusers) - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

## PutEvents

Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutEvents(ctx, operations.PutEventsRequest{
        RequestBody: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: sdk.String("nam"),
                    EventType: "officia",
                    EventValue: sdk.Float32(5820.2),
                    Impression: []string{
                        "deleniti",
                    },
                    ItemID: sdk.String("hic"),
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "optio",
                    },
                    Properties: sdk.String("totam"),
                    RecommendationID: sdk.String("beatae"),
                    SentAt: types.MustTimeFromString("2022-07-12T03:15:36.542Z"),
                },
            },
            SessionID: "modi",
            TrackingID: "qui",
            UserID: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutItems

Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutItems(ctx, operations.PutItemsRequest{
        RequestBody: operations.PutItemsRequestBody{
            DatasetArn: "natus",
            Items: []shared.Item{
                shared.Item{
                    ItemID: "iste",
                    Properties: sdk.String("dolor"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutUsers

Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutUsers(ctx, operations.PutUsersRequest{
        RequestBody: operations.PutUsersRequestBody{
            DatasetArn: "iste",
            Users: []shared.User{
                shared.User{
                    Properties: sdk.String("saepe"),
                    UserID: "quidem",
                },
                shared.User{
                    Properties: sdk.String("architecto"),
                    UserID: "ipsa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
