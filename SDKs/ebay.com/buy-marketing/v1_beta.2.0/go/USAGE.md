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
    res, err := s.MerchandisedProduct.GetMerchandisedProducts(ctx, operations.GetMerchandisedProductsRequest{
        AspectFilter: sdk.String("corrupti"),
        CategoryID: "provident",
        Limit: sdk.String("distinctio"),
        MetricName: "quibusdam",
    }, operations.GetMerchandisedProductsSecurity{
        ClientCredentials: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->