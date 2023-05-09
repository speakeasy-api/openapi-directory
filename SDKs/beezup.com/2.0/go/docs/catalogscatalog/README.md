# CatalogsCatalog

### Available Operations

* [CatalogStoreIndex](#catalogstoreindex) - Get the index of the catalog API for this store
* [CatalogChangeCatalogColumnUserName](#catalogchangecatalogcolumnusername) - Change Catalog Column User Name
* [CatalogChangeCustomColumnExpression](#catalogchangecustomcolumnexpression) - Change custom column expression
* [CatalogChangeCustomColumnUserName](#catalogchangecustomcolumnusername) - Change Custom Column User Name
* [CatalogComputeExpression](#catalogcomputeexpression) - Compute the expression for this catalog.
* [CatalogDeleteCustomColumn](#catalogdeletecustomcolumn) - Delete custom column
* [CatalogGetCatalogColumns](#cataloggetcatalogcolumns) - Get catalog column list
* [CatalogGetCategories](#cataloggetcategories) - Get category list
* [CatalogGetCustomColumnExpression](#cataloggetcustomcolumnexpression) - Get the encrypted custom column expression
* [CatalogGetCustomColumns](#cataloggetcustomcolumns) - Get custom column list
* [CatalogGetProductByProductID](#cataloggetproductbyproductid) - Get product by ProductId
* [CatalogGetProductBySku](#cataloggetproductbysku) - Get product by Sku
* [CatalogGetProducts](#cataloggetproducts) - Get product list
* [CatalogGetRandomProducts](#cataloggetrandomproducts) - Get random product list
* [CatalogSaveCustomColumn](#catalogsavecustomcolumn) - Create or replace a custom column
* [ImportationGetManualUpdateLastInputConfig](#importationgetmanualupdatelastinputconfig) - Get the last input configuration

## CatalogStoreIndex

The operation will give you all the operations you will be able to do on this store for this API.

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
    res, err := s.CatalogsCatalog.CatalogStoreIndex(ctx, operations.CatalogStoreIndexRequest{
        StoreID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogStoreIndex != nil {
        // handle response
    }
}
```

## CatalogChangeCatalogColumnUserName

Change Catalog Column User Name

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
    res, err := s.CatalogsCatalog.CatalogChangeCatalogColumnUserName(ctx, operations.CatalogChangeCatalogColumnUserNameRequest{
        ChangeUserColumnNameRequest: shared.ChangeUserColumnNameRequest{
            UserColumName: "My SKU",
        },
        ColumnID: "perferendis",
        StoreID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CatalogChangeCustomColumnExpression

Change custom column expression

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
    res, err := s.CatalogsCatalog.CatalogChangeCustomColumnExpression(ctx, operations.CatalogChangeCustomColumnExpressionRequest{
        ChangeCustomColumnExpressionRequest: shared.ChangeCustomColumnExpressionRequest{
            EncryptedBlocklyExpression: "apokpoa,opz,sixsoisiosnoisn",
            EncryptedExpression: "uziushdczaniodnndonisodndsiondsoidsndoin",
        },
        ColumnID: "assumenda",
        StoreID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CatalogChangeCustomColumnUserName

Change Custom Column User Name

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
    res, err := s.CatalogsCatalog.CatalogChangeCustomColumnUserName(ctx, operations.CatalogChangeCustomColumnUserNameRequest{
        ChangeUserColumnNameRequest: shared.ChangeUserColumnNameRequest{
            UserColumName: "My SKU",
        },
        ColumnID: "alias",
        StoreID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CatalogComputeExpression

Compute the expression for this catalog.

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
    res, err := s.CatalogsCatalog.CatalogComputeExpression(ctx, operations.CatalogComputeExpressionRequest{
        ComputeExpressionRequest: shared.ComputeExpressionRequest{
            EncryptedExpression: "uziushdczaniodnndonisodndsiondsoidsndoin",
            ProductValues: map[string]string{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
        },
        StoreID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogComputeExpression200ApplicationJSONString != nil {
        // handle response
    }
}
```

## CatalogDeleteCustomColumn

Delete custom column

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
    res, err := s.CatalogsCatalog.CatalogDeleteCustomColumn(ctx, operations.CatalogDeleteCustomColumnRequest{
        ColumnID: "non",
        StoreID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CatalogGetCatalogColumns

Get catalog column list

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
    res, err := s.CatalogsCatalog.CatalogGetCatalogColumns(ctx, operations.CatalogGetCatalogColumnsRequest{
        StoreID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogColumnList != nil {
        // handle response
    }
}
```

## CatalogGetCategories

Get category list

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
    res, err := s.CatalogsCatalog.CatalogGetCategories(ctx, operations.CatalogGetCategoriesRequest{
        AcceptEncoding: []string{
            "provident",
            "necessitatibus",
        },
        StoreID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryList != nil {
        // handle response
    }
}
```

## CatalogGetCustomColumnExpression

Get the encrypted custom column expression

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
    res, err := s.CatalogsCatalog.CatalogGetCustomColumnExpression(ctx, operations.CatalogGetCustomColumnExpressionRequest{
        ColumnID: "officia",
        StoreID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogGetCustomColumnExpression200ApplicationJSONString != nil {
        // handle response
    }
}
```

## CatalogGetCustomColumns

Get custom column list

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
    res, err := s.CatalogsCatalog.CatalogGetCustomColumns(ctx, operations.CatalogGetCustomColumnsRequest{
        StoreID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomColumnList != nil {
        // handle response
    }
}
```

## CatalogGetProductByProductID

Get product by ProductId

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
    res, err := s.CatalogsCatalog.CatalogGetProductByProductID(ctx, operations.CatalogGetProductByProductIDRequest{
        ProductID: "a",
        StoreID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## CatalogGetProductBySku

Get product by Sku

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
    res, err := s.CatalogsCatalog.CatalogGetProductBySku(ctx, operations.CatalogGetProductBySkuRequest{
        Sku: "in",
        StoreID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## CatalogGetProducts

Get product list

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
    res, err := s.CatalogsCatalog.CatalogGetProducts(ctx, operations.CatalogGetProductsRequest{
        GetProductsRequest: shared.GetProductsRequest{
            CategoryPath: []string{
                "maiores",
                "rerum",
                "dicta",
                "magnam",
            },
            ColumnIDList: []string{
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
            },
            Ean: sdk.String("MySku123"),
            Exists: sdk.Bool(true),
            Mpn: sdk.String("MySku123"),
            OrderByCatalogColumnID: sdk.String("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
            PageNumber: 1,
            PageSize: 100,
            ProductIDList: []string{
                "578419df-1bbf-41a6-96fa-862e42182b67",
                "578419df-1bbf-41a6-96fa-862e42182b67",
                "578419df-1bbf-41a6-96fa-862e42182b67",
                "578419df-1bbf-41a6-96fa-862e42182b67",
            },
            Sku: sdk.String("MySku123"),
            Title: sdk.String("Frigo"),
            WithoutSubCategories: sdk.Bool(true),
        },
        StoreID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductList != nil {
        // handle response
    }
}
```

## CatalogGetRandomProducts

We will return 10 products randomly selected with all product values

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
    res, err := s.CatalogsCatalog.CatalogGetRandomProducts(ctx, operations.CatalogGetRandomProductsRequest{
        StoreID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RandomProductList != nil {
        // handle response
    }
}
```

## CatalogSaveCustomColumn

Create or replace a custom column

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
    res, err := s.CatalogsCatalog.CatalogSaveCustomColumn(ctx, operations.CatalogSaveCustomColumnRequest{
        ColumnID: "laborum",
        CreateCustomColumnRequest: shared.CreateCustomColumnRequest{
            DisplayGroupName: "Category",
            EncryptedBlocklyExpression: "apokpoa,opz,sixsoisiosnoisn",
            EncryptedExpression: "uziushdczaniodnndonisodndsiondsoidsndoin",
            UserColumnName: "My SKU",
        },
        StoreID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationGetManualUpdateLastInputConfig

Get the last input configuration

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
    res, err := s.CatalogsCatalog.ImportationGetManualUpdateLastInputConfig(ctx, operations.ImportationGetManualUpdateLastInputConfigRequest{
        StoreID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LastManualImportInputConfiguration != nil {
        // handle response
    }
}
```
