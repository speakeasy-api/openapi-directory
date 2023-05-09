# Product

## Overview

Product object represents your document's product.

### Available Operations

* [CreateProduct](#createproduct) - Create a product
* [DeleteProduct](#deleteproduct) - Delete a product
* [GetProduct](#getproduct) - Retrieve a product
* [ListProduct](#listproduct) - List all product
* [UpdateProduct](#updateproduct) - Update a product

## CreateProduct

Create a new product. Returns a product object if the create is succeded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.CreateProduct(ctx, shared.ProductInput{
        Comment: sdk.String("ipsam"),
        Currency: shared.CurrencyEnumAud,
        GeneralLedgerNumber: sdk.String("fugit"),
        GeneralLedgerTaxcode: sdk.String("dolorum"),
        Name: "Eddie Prosacco",
        NetUnitPrice: sdk.Float32(9621.89),
        Unit: "eum",
        Vat: shared.VatEnumSeventeenPercent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## DeleteProduct

Delete an existing product.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.DeleteProduct(ctx, operations.DeleteProductRequest{
        ID: 756107,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProduct

Retrieves the details of an existing product.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.GetProduct(ctx, operations.GetProductRequest{
        ID: 576157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## ListProduct

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.ListProduct(ctx, operations.ListProductRequest{
        Page: sdk.Int64(396098),
        PerPage: sdk.Int64(592042),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductList != nil {
        // handle response
    }
}
```

## UpdateProduct

Update an existing product. Returns a product object if the update is succeded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.UpdateProduct(ctx, operations.UpdateProductRequest{
        ProductInput: shared.ProductInput{
            Comment: sdk.String("necessitatibus"),
            Currency: shared.CurrencyEnumMxn,
            GeneralLedgerNumber: sdk.String("officia"),
            GeneralLedgerTaxcode: sdk.String("dolor"),
            Name: "Randal Parisian",
            NetUnitPrice: sdk.Float32(8464.09),
            Unit: "maiores",
            Vat: shared.VatEnumNinePercent,
        },
        ID: 116202,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```
