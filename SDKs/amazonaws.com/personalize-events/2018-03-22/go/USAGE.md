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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "vel",
                    EventType: "error",
                    EventValue: 6458.94,
                    Impression: []string{
                        "iure",
                        "magnam",
                    },
                    ItemID: "debitis",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "ipsa",
                    },
                    Properties: "delectus",
                    RecommendationID: "tempora",
                    SentAt: "2022-11-10T03:53:18.412Z",
                },
                shared.Event{
                    EventID: "molestiae",
                    EventType: "minus",
                    EventValue: 8121.69,
                    Impression: []string{
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    ItemID: "recusandae",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "temporibus",
                    },
                    Properties: "ab",
                    RecommendationID: "quis",
                    SentAt: "2023-02-26T07:35:00.428Z",
                },
                shared.Event{
                    EventID: "deserunt",
                    EventType: "perferendis",
                    EventValue: 3682.41,
                    Impression: []string{
                        "sapiente",
                        "quo",
                        "odit",
                        "at",
                    },
                    ItemID: "at",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "maiores",
                    },
                    Properties: "molestiae",
                    RecommendationID: "quod",
                    SentAt: "2022-06-10T18:51:29.165Z",
                },
                shared.Event{
                    EventID: "esse",
                    EventType: "totam",
                    EventValue: 7805.29,
                    Impression: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                    ItemID: "occaecati",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "fugit",
                    },
                    Properties: "deleniti",
                    RecommendationID: "hic",
                    SentAt: "2022-06-26T05:21:48.412Z",
                },
            },
            SessionID: "totam",
            TrackingID: "beatae",
            UserID: "commodi",
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