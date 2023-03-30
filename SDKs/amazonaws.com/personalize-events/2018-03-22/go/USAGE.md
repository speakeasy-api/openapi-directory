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
                    SentAt: "2022-11-10T01:02:50.336Z",
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
                    SentAt: "2023-02-26T04:44:32.347Z",
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
                    SentAt: "2022-06-10T16:01:01.080Z",
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
                    SentAt: "2022-06-26T02:31:20.322Z",
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