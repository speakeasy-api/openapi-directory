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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "optio",
            XAmzCredential: "iste",
            XAmzDate: "nisi",
            XAmzSecurityToken: "repudiandae",
            XAmzSignature: "amet",
            XAmzSignedHeaders: "impedit",
            XAmzTarget: "AWS242ServiceCatalogService.AcceptPortfolioShare",
        },
        Request: shared.AcceptPortfolioShareInput{
            AcceptLanguage: "eum",
            PortfolioID: "et",
            PortfolioShareType: "AWS_SERVICECATALOG",
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