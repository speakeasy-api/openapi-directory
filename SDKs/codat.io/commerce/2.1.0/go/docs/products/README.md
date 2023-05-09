# Products

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [ListProductCategories](#listproductcategories) - List product categories
* [ListProducts](#listproducts) - List products

## ListProductCategories

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Products.ListProductCategories(ctx, operations.ListProductCategoriesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCategories != nil {
        // handle response
    }
}
```

## ListProducts

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Products.ListProducts(ctx, operations.ListProductsRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```
