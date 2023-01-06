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
            XAmzAlgorithm: "qui",
            XAmzContentSha256: "adipisci",
            XAmzCredential: "qui",
            XAmzDate: "iste",
            XAmzSecurityToken: "minima",
            XAmzSignature: "blanditiis",
            XAmzSignedHeaders: "sit",
        },
        Request: operations.GetIceServerConfigRequestBody{
            ChannelARN: "dolorem",
            ClientID: "earum",
            Service: "TURN",
            Username: "dolores",
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