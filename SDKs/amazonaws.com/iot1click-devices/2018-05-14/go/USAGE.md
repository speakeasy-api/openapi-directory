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
    
    req := operations.ClaimDevicesByClaimCodeRequest{
        PathParams: operations.ClaimDevicesByClaimCodePathParams{
            ClaimCode: "sit",
        },
        Headers: operations.ClaimDevicesByClaimCodeHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
    }
    
    res, err := s.ClaimDevicesByClaimCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimDevicesByClaimCodeResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->