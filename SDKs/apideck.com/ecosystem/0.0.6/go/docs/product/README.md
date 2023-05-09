# Product

### Available Operations

* [ProductListingsAll](#productlistingsall) - List product listings
* [ProductsAll](#productsall) - List products
* [ProductsOne](#productsone) - Get product

## ProductListingsAll

List product listings

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
    res, err := s.Product.ProductListingsAll(ctx, operations.ProductListingsAllRequest{
        Cursor: sdk.String("itaque"),
        EcosystemID: "incidunt",
        ID: "50ad2abd-4426-4980-ad50-2a94bb4f63c9",
        Limit: sdk.Int64(396098),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListingsResponse != nil {
        // handle response
    }
}
```

## ProductsAll

List products

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
    res, err := s.Product.ProductsAll(ctx, operations.ProductsAllRequest{
        EcosystemID: "provident",
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

Get product

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
    res, err := s.Product.ProductsOne(ctx, operations.ProductsOneRequest{
        EcosystemID: "necessitatibus",
        ID: "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductResponse != nil {
        // handle response
    }
}
```
