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
            ClaimCode: "amet",
        },
        Headers: operations.ClaimDevicesByClaimCodeHeaders{
            XAmzAlgorithm: "inventore",
            XAmzContentSha256: "reprehenderit",
            XAmzCredential: "autem",
            XAmzDate: "tenetur",
            XAmzSecurityToken: "facilis",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "est",
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