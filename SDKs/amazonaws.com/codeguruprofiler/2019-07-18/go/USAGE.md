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
            ProfilingGroupName: "deleniti",
        },
        Headers: operations.AddNotificationChannelsHeaders{
            XAmzAlgorithm: "corporis",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "architecto",
            XAmzDate: "et",
            XAmzSecurityToken: "eum",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "totam",
        },
        Request: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "explicabo",
                    URI: "consequatur",
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