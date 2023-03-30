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
            WorkspaceID: "provident",
        },
        Headers: operations.AssociateLicenseHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
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