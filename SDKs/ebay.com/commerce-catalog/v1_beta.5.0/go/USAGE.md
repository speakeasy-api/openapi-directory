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
        Security: operations.GetProductSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetProductPathParams{
            Epid: "corrupti",
        },
        Headers: operations.GetProductHeaders{
            XEbayCMarketplaceID: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.Product.GetProduct(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->