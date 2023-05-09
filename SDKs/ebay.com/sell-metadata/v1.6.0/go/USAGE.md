<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Country.GetSalesTaxJurisdictions(ctx, operations.GetSalesTaxJurisdictionsRequest{
        CountryCode: "MA",
    }, operations.GetSalesTaxJurisdictionsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesTaxJurisdictions != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->