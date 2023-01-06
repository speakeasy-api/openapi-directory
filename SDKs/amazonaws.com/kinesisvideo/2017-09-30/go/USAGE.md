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
    
    req := operations.CreateSignalingChannelRequest{
        Headers: operations.CreateSignalingChannelHeaders{
            XAmzAlgorithm: "a",
            XAmzContentSha256: "ullam",
            XAmzCredential: "dolor",
            XAmzDate: "dolor",
            XAmzSecurityToken: "ducimus",
            XAmzSignature: "in",
            XAmzSignedHeaders: "enim",
        },
        Request: operations.CreateSignalingChannelRequestBody{
            ChannelName: "iusto",
            ChannelType: "SINGLE_MASTER",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 7492940092278234709,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolores",
                    Value: "voluptate",
                },
            },
        },
    }
    
    res, err := s.CreateSignalingChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSignalingChannelOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->