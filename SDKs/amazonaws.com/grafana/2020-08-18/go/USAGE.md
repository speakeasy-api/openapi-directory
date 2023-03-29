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

    req := operations.AssociateLicenseRequest{
        PathParams: operations.AssociateLicensePathParams{
            LicenseType: "ENTERPRISE_FREE_TRIAL",
            WorkspaceID: "deserunt",
        },
        Headers: operations.AssociateLicenseHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateLicense(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateLicenseResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->