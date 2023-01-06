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
    
    req := operations.CloseTunnelRequest{
        Headers: operations.CloseTunnelHeaders{
            XAmzAlgorithm: "quaerat",
            XAmzContentSha256: "ut",
            XAmzCredential: "et",
            XAmzDate: "vel",
            XAmzSecurityToken: "et",
            XAmzSignature: "ipsam",
            XAmzSignedHeaders: "magni",
            XAmzTarget: "IoTSecuredTunneling.CloseTunnel",
        },
        Request: shared.CloseTunnelRequest{
            Delete: true,
            TunnelID: "impedit",
        },
    }
    
    res, err := s.CloseTunnel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseTunnelResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->