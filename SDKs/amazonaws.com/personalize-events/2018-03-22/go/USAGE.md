<!-- Start SDK Example Usage -->
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
    res, err := s.PutEvents(ctx, operations.PutEventsRequest{
        RequestBody: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: sdk.String("provident"),
                    EventType: "distinctio",
                    EventValue: sdk.Float32(8442.66),
                    Impression: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    ItemID: sdk.String("vel"),
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "error",
                    },
                    Properties: sdk.String("deserunt"),
                    RecommendationID: sdk.String("suscipit"),
                    SentAt: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
                },
                shared.Event{
                    EventID: sdk.String("debitis"),
                    EventType: "ipsa",
                    EventValue: sdk.Float32(9636.63),
                    Impression: []string{
                        "suscipit",
                        "molestiae",
                    },
                    ItemID: sdk.String("minus"),
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "placeat",
                    },
                    Properties: sdk.String("voluptatum"),
                    RecommendationID: sdk.String("iusto"),
                    SentAt: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
                },
                shared.Event{
                    EventID: sdk.String("recusandae"),
                    EventType: "temporibus",
                    EventValue: sdk.Float32(710.36),
                    Impression: []string{
                        "veritatis",
                        "deserunt",
                    },
                    ItemID: sdk.String("perferendis"),
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "ipsam",
                    },
                    Properties: sdk.String("repellendus"),
                    RecommendationID: sdk.String("sapiente"),
                    SentAt: types.MustTimeFromString("2022-07-31T07:34:52.790Z"),
                },
            },
            SessionID: "at",
            TrackingID: "at",
            UserID: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->