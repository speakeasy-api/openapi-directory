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
            XAmzAlgorithm: "error",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "odit",
            XAmzDate: "exercitationem",
            XAmzSecurityToken: "hic",
            XAmzSignature: "perferendis",
            XAmzSignedHeaders: "cupiditate",
        },
        Request: operations.CreateSignalingChannelRequestBody{
            ChannelName: "sed",
            ChannelType: "SINGLE_MASTER",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 7341080715805291804,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "qui",
                    Value: "eius",
                },
                shared.Tag{
                    Key: "voluptas",
                    Value: "dicta",
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