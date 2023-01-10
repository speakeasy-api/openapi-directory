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
    
    req := operations.GetIceServerConfigRequest{
        Headers: operations.GetIceServerConfigHeaders{
            XAmzAlgorithm: "nemo",
            XAmzContentSha256: "corporis",
            XAmzCredential: "cupiditate",
            XAmzDate: "soluta",
            XAmzSecurityToken: "voluptatibus",
            XAmzSignature: "maiores",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.GetIceServerConfigRequestBody{
            ChannelARN: "expedita",
            ClientID: "nisi",
            Service: "TURN",
            Username: "magni",
        },
    }
    
    res, err := s.GetIceServerConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIceServerConfigResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->