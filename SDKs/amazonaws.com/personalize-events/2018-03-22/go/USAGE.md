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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.PutEventsRequest{
        Headers: operations.PutEventsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "nihil",
                    EventType: "fuga",
                    EventValue: 6458.94,
                    Impression: []string{
                        "iusto",
                        "ullam",
                    },
                    ItemID: "saepe",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "inventore",
                    },
                    Properties: "sapiente",
                    RecommendationID: "enim",
                    SentAt: "2022-11-09T13:35:32.249Z",
                },
                shared.Event{
                    EventID: "voluptatum",
                    EventType: "autem",
                    EventValue: 8121.69,
                    Impression: []string{
                        "deleniti",
                        "similique",
                        "reprehenderit",
                    },
                    ItemID: "molestiae",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "quo",
                    },
                    Properties: "quasi",
                    RecommendationID: "laboriosam",
                    SentAt: "2023-02-25T17:17:14.260Z",
                },
                shared.Event{
                    EventID: "est",
                    EventType: "voluptatem",
                    EventValue: 3682.41,
                    Impression: []string{
                        "a",
                        "omnis",
                        "eos",
                        "accusamus",
                    },
                    ItemID: "accusamus",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "reiciendis",
                    },
                    Properties: "rem",
                    RecommendationID: "quibusdam",
                    SentAt: "2022-06-10T04:33:42.993Z",
                },
                shared.Event{
                    EventID: "praesentium",
                    EventType: "occaecati",
                    EventValue: 7805.29,
                    Impression: []string{
                        "sed",
                        "quisquam",
                        "rerum",
                    },
                    ItemID: "culpa",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "qui",
                    },
                    Properties: "sed",
                    RecommendationID: "rerum",
                    SentAt: "2022-06-25T15:04:02.236Z",
                },
            },
            SessionID: "occaecati",
            TrackingID: "odit",
            UserID: "esse",
        },
    }

    ctx := context.Background()
    res, err := s.PutEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->