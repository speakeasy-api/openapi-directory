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
    
    req := operations.AddNotificationChannelsRequest{
        PathParams: operations.AddNotificationChannelsPathParams{
            ProfilingGroupName: "rem",
        },
        Headers: operations.AddNotificationChannelsHeaders{
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "enim",
            XAmzCredential: "quia",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "numquam",
            XAmzSignedHeaders: "et",
        },
        Request: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "quia",
                    URI: "aliquid",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "voluptate",
                    URI: "est",
                },
            },
        },
    }
    
    res, err := s.AddNotificationChannels(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->