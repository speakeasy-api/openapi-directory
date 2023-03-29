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
        Security: operations.GetSalesTaxJurisdictionsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetSalesTaxJurisdictionsPathParams{
            CountryCode: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Country.GetSalesTaxJurisdictions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesTaxJurisdictions != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->