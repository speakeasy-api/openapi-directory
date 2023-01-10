<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.PutEventsRequest{
        Headers: operations.PutEventsHeaders{
            XAmzAlgorithm: "aperiam",
            XAmzContentSha256: "enim",
            XAmzCredential: "sequi",
            XAmzDate: "laborum",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "aliquid",
            XAmzSignedHeaders: "maiores",
            XAmzClientContext: "velit",
            XAmzClientContextEncoding: "modi",
        },
        Request: operations.PutEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "doloremque": "cum",
                        "necessitatibus": "illum",
                        "enim": "aspernatur",
                    },
                    EventType: "ratione",
                    Metrics: map[string]float64{
                        "omnis": 1.100000,
                        "omnis": 40.200001,
                    },
                    Session: &shared.Session{
                        Duration: 164162024630061234,
                        ID: "voluptatibus",
                        StartTimestamp: "enim",
                        StopTimestamp: "in",
                    },
                    Timestamp: "reiciendis",
                    Version: "rerum",
                },
                shared.Event{
                    Attributes: map[string]string{
                        "perspiciatis": "fugit",
                        "asperiores": "fugit",
                        "in": "ex",
                    },
                    EventType: "saepe",
                    Metrics: map[string]float64{
                        "nulla": 19.200001,
                        "aliquid": 33.099998,
                    },
                    Session: &shared.Session{
                        Duration: 273263606341302306,
                        ID: "fugit",
                        StartTimestamp: "qui",
                        StopTimestamp: "natus",
                    },
                    Timestamp: "molestiae",
                    Version: "odit",
                },
            },
        },
    }
    
    res, err := s.PutEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->