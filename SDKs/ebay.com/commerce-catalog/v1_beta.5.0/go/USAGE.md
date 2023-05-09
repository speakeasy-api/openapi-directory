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
    res, err := s.Product.GetProduct(ctx, operations.GetProductRequest{
        XEbayCMarketplaceID: sdk.String("corrupti"),
        Epid: "provident",
    }, operations.GetProductSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->