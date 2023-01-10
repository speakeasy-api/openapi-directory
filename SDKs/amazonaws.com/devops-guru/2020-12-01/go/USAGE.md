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
    
    req := operations.AddNotificationChannelRequest{
        Headers: operations.AddNotificationChannelHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "a",
            XAmzDate: "consequatur",
            XAmzSecurityToken: "dolore",
            XAmzSignature: "assumenda",
            XAmzSignedHeaders: "rerum",
        },
        Request: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Sns: &shared.SnsChannelConfig{
                    TopicArn: "non",
                },
            },
        },
    }
    
    res, err := s.AddNotificationChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->