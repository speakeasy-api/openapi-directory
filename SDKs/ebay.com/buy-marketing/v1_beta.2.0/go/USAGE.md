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

    req := operations.GetMerchandisedProductsRequest{
        Security: operations.GetMerchandisedProductsSecurity{
            ClientCredentials: shared.SchemeClientCredentials{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetMerchandisedProductsQueryParams{
            AspectFilter: "corrupti",
            CategoryID: "provident",
            Limit: "distinctio",
            MetricName: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.MerchandisedProduct.GetMerchandisedProducts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->