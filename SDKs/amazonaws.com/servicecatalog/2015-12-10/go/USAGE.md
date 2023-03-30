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

    req := operations.AcceptPortfolioShareRequest{
        Headers: operations.AcceptPortfolioShareHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWS242ServiceCatalogService.AcceptPortfolioShare",
        },
        Request: shared.AcceptPortfolioShareInput{
            AcceptLanguage: "illum",
            PortfolioID: "vel",
            PortfolioShareType: "AWS_SERVICECATALOG",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptPortfolioShare(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPortfolioShareOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->