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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.GetIceServerConfigRequestBody{
            ChannelARN: "voluptas",
            ClientID: "fugit",
            Service: "TURN",
            Username: "nihil",
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