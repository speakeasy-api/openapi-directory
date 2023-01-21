<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetCertificatePdfRequest{
        Security: operations.GetCertificatePdfSecurity{
            CertAuth: shared.SchemeCertAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.CertificateRequest{
            BeneficiaryID: "sit",
            Mobile: "voluptas",
        },
    }
    
    res, err := s.Certificate.GetCertificatePdf(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->