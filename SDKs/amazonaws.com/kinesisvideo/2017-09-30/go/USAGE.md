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

    req := operations.CreateSignalingChannelRequest{
        RequestBody: operations.CreateSignalingChannelRequestBody{
            ChannelName: "corrupti",
            ChannelType: "FULL_MESH",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 715190,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateSignalingChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSignalingChannelOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->