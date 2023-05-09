# Products

### Available Operations

* [ProductsDelete](#productsdelete) - Removes an existing Product.
* [ProductsGet](#productsget) - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* [ProductsPost](#productspost) - Creates a new Product.
* [ProductsProcessBatch](#productsprocessbatch) - Processes a batch of Products.
* [ProductsPut](#productsput) - Updates an existing Product.
* [GetV1ProductsID](#getv1productsid) - Returns information about a single Product.

## ProductsDelete

Removes an existing Product.

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
    res, err := s.Products.ProductsDelete(ctx, operations.ProductsDeleteRequest{
        ID: 703218,
        Timestamp: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductsGet

Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.ProductsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultProductDto != nil {
        // handle response
    }
}
```

## ProductsPost

Creates a new Product.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.ProductsPost(ctx, shared.ProductDto{
        Details: []string{
            "voluptatem",
            "sapiente",
            "officiis",
        },
        GrossUnitPrice: sdk.Bool(false),
        HasDefaultVatRate: sdk.Bool(false),
        ID: sdk.Int64(103298),
        ProductTypeID: sdk.Int64(682119),
        StockCode: sdk.String("pariatur"),
        Timestamp: sdk.String("debitis"),
        UnitPrice: sdk.Float64(291.9),
        VatAnalysisTypeID: sdk.Int64(1207),
        VatRateID: sdk.Int64(534917),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductsProcessBatch

Processes a batch of Products.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.ProductsProcessBatch(ctx, []shared.BatchItemProductDto{
        shared.BatchItemProductDto{
            Item: &shared.ProductDto{
                Details: []string{
                    "sapiente",
                    "rem",
                },
                GrossUnitPrice: sdk.Bool(false),
                HasDefaultVatRate: sdk.Bool(false),
                ID: sdk.Int64(796320),
                ProductTypeID: sdk.Int64(365100),
                StockCode: sdk.String("asperiores"),
                Timestamp: sdk.String("ratione"),
                UnitPrice: sdk.Float64(3552.25),
                VatAnalysisTypeID: sdk.Int64(19122),
                VatRateID: sdk.Int64(848341),
            },
            OpCode: shared.BatchItemProductDtoOpCodeEnumTwo.ToPointer(),
        },
        shared.BatchItemProductDto{
            Item: &shared.ProductDto{
                Details: []string{
                    "quibusdam",
                    "nam",
                    "ipsam",
                    "culpa",
                },
                GrossUnitPrice: sdk.Bool(false),
                HasDefaultVatRate: sdk.Bool(false),
                ID: sdk.Int64(222864),
                ProductTypeID: sdk.Int64(307376),
                StockCode: sdk.String("inventore"),
                Timestamp: sdk.String("deleniti"),
                UnitPrice: sdk.Float64(853.11),
                VatAnalysisTypeID: sdk.Int64(274575),
                VatRateID: sdk.Int64(221396),
            },
            OpCode: shared.BatchItemProductDtoOpCodeEnumOne.ToPointer(),
        },
        shared.BatchItemProductDto{
            Item: &shared.ProductDto{
                Details: []string{
                    "sit",
                },
                GrossUnitPrice: sdk.Bool(false),
                HasDefaultVatRate: sdk.Bool(false),
                ID: sdk.Int64(265039),
                ProductTypeID: sdk.Int64(144286),
                StockCode: sdk.String("ab"),
                Timestamp: sdk.String("laudantium"),
                UnitPrice: sdk.Float64(656.04),
                VatAnalysisTypeID: sdk.Int64(222658),
                VatRateID: sdk.Int64(856277),
            },
            OpCode: shared.BatchItemProductDtoOpCodeEnumTwo.ToPointer(),
        },
        shared.BatchItemProductDto{
            Item: &shared.ProductDto{
                Details: []string{
                    "ipsa",
                },
                GrossUnitPrice: sdk.Bool(false),
                HasDefaultVatRate: sdk.Bool(false),
                ID: sdk.Int64(559682),
                ProductTypeID: sdk.Int64(911198),
                StockCode: sdk.String("impedit"),
                Timestamp: sdk.String("officiis"),
                UnitPrice: sdk.Float64(4564.1),
                VatAnalysisTypeID: sdk.Int64(897277),
                VatRateID: sdk.Int64(153369),
            },
            OpCode: shared.BatchItemProductDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductsPut

Updates an existing Product.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.ProductsPut(ctx, operations.ProductsPutRequest{
        ProductDto: shared.ProductDto{
            Details: []string{
                "expedita",
            },
            GrossUnitPrice: sdk.Bool(false),
            HasDefaultVatRate: sdk.Bool(false),
            ID: sdk.Int64(432984),
            ProductTypeID: sdk.Int64(426943),
            StockCode: sdk.String("voluptatum"),
            Timestamp: sdk.String("magnam"),
            UnitPrice: sdk.Float64(3494.4),
            VatAnalysisTypeID: sdk.Int64(70410),
            VatRateID: sdk.Int64(781480),
        },
        ID: 421844,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1ProductsID

Returns information about a single Product.

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
    res, err := s.Products.GetV1ProductsID(ctx, operations.GetV1ProductsIDRequest{
        ID: 751022,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductDto != nil {
        // handle response
    }
}
```
