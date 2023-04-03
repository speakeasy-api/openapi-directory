# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/personalize-events/2018-03-22/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.PutEventsRequest{
        RequestBody: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "provident",
                    EventType: "distinctio",
                    EventValue: 8442.66,
                    Impression: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    ItemID: "vel",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "error",
                    },
                    Properties: "deserunt",
                    RecommendationID: "suscipit",
                    SentAt: "2022-09-14T09:35:47.986Z",
                },
                shared.Event{
                    EventID: "debitis",
                    EventType: "ipsa",
                    EventValue: 9636.63,
                    Impression: []string{
                        "suscipit",
                        "molestiae",
                    },
                    ItemID: "minus",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "placeat",
                    },
                    Properties: "voluptatum",
                    RecommendationID: "iusto",
                    SentAt: "2022-03-20T06:24:36.919Z",
                },
                shared.Event{
                    EventID: "recusandae",
                    EventType: "temporibus",
                    EventValue: 710.36,
                    Impression: []string{
                        "veritatis",
                        "deserunt",
                    },
                    ItemID: "perferendis",
                    MetricAttribution: &shared.MetricAttribution{
                        EventAttributionSource: "ipsam",
                    },
                    Properties: "repellendus",
                    RecommendationID: "sapiente",
                    SentAt: "2022-07-31T07:34:52.790Z",
                },
            },
            SessionID: "at",
            TrackingID: "at",
            UserID: "maiores",
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "quod",
        XAmzCredential: "quod",
        XAmzDate: "esse",
        XAmzSecurityToken: "totam",
        XAmzSignature: "porro",
        XAmzSignedHeaders: "dolorum",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `PutEvents` - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* `PutItems` - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* `PutUsers` - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
