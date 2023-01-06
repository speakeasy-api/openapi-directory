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
            ClaimCode: "mollitia",
        },
        Headers: operations.ClaimDevicesByClaimCodeHeaders{
            XAmzAlgorithm: "praesentium",
            XAmzContentSha256: "inventore",
            XAmzCredential: "adipisci",
            XAmzDate: "sint",
            XAmzSecurityToken: "quaerat",
            XAmzSignature: "sed",
            XAmzSignedHeaders: "omnis",
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