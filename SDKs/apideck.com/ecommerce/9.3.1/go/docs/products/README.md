# Products

### Available Operations

* [ProductsAll](#productsall) - List Products
* [ProductsOne](#productsone) - Get Product

## ProductsAll

List Products

### Example Usage

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
    res, err := s.Products.ProductsAll(ctx, operations.ProductsAllRequest{
        Cursor: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Limit: sdk.Int64(670638),
        Raw: sdk.Bool(false),
        XApideckAppID: "dolores",
        XApideckConsumerID: "dolorem",
        XApideckServiceID: sdk.String("corporis"),
    }, operations.ProductsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductsResponse != nil {
        // handle response
    }
}
```

## ProductsOne

Get Product

### Example Usage

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
    res, err := s.Products.ProductsOne(ctx, operations.ProductsOneRequest{
        Fields: sdk.String("explicabo"),
        ID: "c5955907-aff1-4a3a-afa9-467739251aa5",
        Raw: sdk.Bool(false),
        XApideckAppID: "odit",
        XApideckConsumerID: "quo",
        XApideckServiceID: sdk.String("sequi"),
    }, operations.ProductsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductResponse != nil {
        // handle response
    }
}
```
