<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AcceptPortfolioShare(ctx, operations.AcceptPortfolioShareRequest{
        AcceptPortfolioShareInput: shared.AcceptPortfolioShareInput{
            AcceptLanguage: sdk.String("corrupti"),
            PortfolioID: "provident",
            PortfolioShareType: shared.PortfolioShareTypeEnumAwsOrganizations.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.AcceptPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceAcceptPortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPortfolioShareOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->