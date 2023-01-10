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
    
    req := operations.GetFoodBrandedBarcodePhpRequest{
        Security: operations.GetFoodBrandedBarcodePhpSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetFoodBrandedBarcodePhpQueryParams{
            Code: "velit",
        },
    }
    
    res, err := s.GetFoodBrandedBarcodePhp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BrandedFoodObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->