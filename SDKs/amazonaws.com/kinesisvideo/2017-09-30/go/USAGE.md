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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateSignalingChannelRequest{
        Headers: operations.CreateSignalingChannelHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateSignalingChannelRequestBody{
            ChannelName: "illum",
            ChannelType: "SINGLE_MASTER",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 623564,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "magnam",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "delectus",
                },
            },
        },
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