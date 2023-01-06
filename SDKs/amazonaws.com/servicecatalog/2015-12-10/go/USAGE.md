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
            XAmzAlgorithm: "officiis",
            XAmzContentSha256: "veniam",
            XAmzCredential: "ducimus",
            XAmzDate: "eius",
            XAmzSecurityToken: "nobis",
            XAmzSignature: "aliquam",
            XAmzSignedHeaders: "qui",
            XAmzTarget: "AWS242ServiceCatalogService.AcceptPortfolioShare",
        },
        Request: shared.AcceptPortfolioShareInput{
            AcceptLanguage: "recusandae",
            PortfolioID: "consequatur",
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