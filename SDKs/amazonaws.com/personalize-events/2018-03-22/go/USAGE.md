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
                    SentAt: "2022-07-10T15:39:12.517Z",
                },
                shared.Event{
                    EventID: "minus",
                    EventType: "placeat",
                    EventValue: 5288.95,
                    Impression: []string{
                        "excepturi",
                        "nisi",
                    },
                    ItemID: "recusandae",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "temporibus",
                    },
                    Properties: "ab",
                    RecommendationID: "quis",
                    SentAt: "2022-05-09T10:00:51.349Z",
                },
                shared.Event{
                    EventID: "perferendis",
                    EventType: "ipsam",
                    EventValue: 8326.2,
                    Impression: []string{
                        "quo",
                        "odit",
                        "at",
                        "at",
                    },
                    ItemID: "maiores",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "molestiae",
                    },
                    Properties: "quod",
                    RecommendationID: "quod",
                    SentAt: "2022-06-25T00:37:01.696Z",
                },
                shared.Event{
                    EventID: "porro",
                    EventType: "dolorum",
                    EventValue: 1182.74,
                    Impression: []string{
                        "officia",
                        "occaecati",
                        "fugit",
                    },
                    ItemID: "deleniti",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "hic",
                    },
                    Properties: "optio",
                    RecommendationID: "totam",
                    SentAt: "2022-08-02T15:33:40.440Z",
                },
            },
            SessionID: "molestiae",
            TrackingID: "modi",
            UserID: "qui",
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