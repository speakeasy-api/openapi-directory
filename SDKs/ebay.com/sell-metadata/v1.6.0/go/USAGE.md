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
    s := sdk.New()

    req := operations.GetSalesTaxJurisdictionsRequest{
        CountryCode: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Country.GetSalesTaxJurisdictions(ctx, req, operations.GetSalesTaxJurisdictionsSecurity{
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