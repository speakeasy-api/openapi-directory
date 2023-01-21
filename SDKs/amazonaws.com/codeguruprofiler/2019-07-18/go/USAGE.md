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
            ProfilingGroupName: "sit",
        },
        Headers: operations.AddNotificationChannelsHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                    },
                    ID: "rerum",
                    URI: "dicta",
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