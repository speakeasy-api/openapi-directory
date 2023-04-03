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

    req := operations.GetFoodBrandedBarcodePhpRequest{
        Code: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GetFoodBrandedBarcodePhp(ctx, req, operations.GetFoodBrandedBarcodePhpSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrandedFoodObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->