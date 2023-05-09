<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificate.GetCertificatePdf(ctx, shared.CertificateRequest{
        BeneficiaryID: sdk.String("corrupti"),
        Mobile: sdk.String("(786) 858-4663 x4280"),
    }, operations.GetCertificatePdfSecurity{
        CertAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->