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
    res, err := s.GetFoodBrandedBarcodePhp(ctx, operations.GetFoodBrandedBarcodePhpRequest{
        Code: "corrupti",
    }, operations.GetFoodBrandedBarcodePhpSecurity{
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