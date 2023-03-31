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

    req := operations.GetProductRequest{
        XEbayCMarketplaceID: "corrupti",
        Epid: "provident",
    }

    ctx := context.Background()
    res, err := s.Product.GetProduct(ctx, req, operations.GetProductSecurity{
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