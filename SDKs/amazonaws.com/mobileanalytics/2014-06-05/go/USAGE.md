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