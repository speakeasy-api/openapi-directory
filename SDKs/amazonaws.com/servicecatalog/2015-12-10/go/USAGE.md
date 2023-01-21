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
    
    req := operations.AcceptPortfolioShareRequest{
        Headers: operations.AcceptPortfolioShareHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWS242ServiceCatalogService.AcceptPortfolioShare",
        },
        Request: shared.AcceptPortfolioShareInput{
            AcceptLanguage: "fugit",
            PortfolioID: "et",
            PortfolioShareType: "IMPORTED",
        },
    }
    
    res, err := s.AcceptPortfolioShare(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPortfolioShareOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->