# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mobileanalytics/2014-06-05/go
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
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EventType: "vel",
                    Metrics: map[string]float64{
                        "deserunt": 3843.82,
                        "iure": 2975.34,
                        "debitis": 567.13,
                    },
                    Session: &shared.Session{
                        Duration: 963663,
                        ID: "tempora",
                        StartTimestamp: "suscipit",
                        StopTimestamp: "molestiae",
                    },
                    Timestamp: "minus",
                    Version: "placeat",
                },
                shared.Event{
                    Attributes: map[string]string{
                        "iusto": "excepturi",
                        "nisi": "recusandae",
                        "temporibus": "ab",
                    },
                    EventType: "quis",
                    Metrics: map[string]float64{
                        "deserunt": 202.18,
                    },
                    Session: &shared.Session{
                        Duration: 368241,
                        ID: "repellendus",
                        StartTimestamp: "sapiente",
                        StopTimestamp: "quo",
                    },
                    Timestamp: "odit",
                    Version: "at",
                },
                shared.Event{
                    Attributes: map[string]string{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    EventType: "dicta",
                    Metrics: map[string]float64{
                        "officia": 5820.2,
                        "fugit": 5373.73,
                        "hic": 7586.16,
                    },
                    Session: &shared.Session{
                        Duration: 521848,
                        ID: "beatae",
                        StartTimestamp: "commodi",
                        StopTimestamp: "molestiae",
                    },
                    Timestamp: "modi",
                    Version: "qui",
                },
            },
        },
        XAmzAlgorithm: "impedit",
        XAmzContentSha256: "cum",
        XAmzCredential: "esse",
        XAmzDate: "ipsum",
        XAmzSecurityToken: "excepturi",
        XAmzSignature: "aspernatur",
        XAmzSignedHeaders: "perferendis",
        XAmzClientContext: "ad",
        XAmzClientContextEncoding: "natus",
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

* `PutEvents` - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
