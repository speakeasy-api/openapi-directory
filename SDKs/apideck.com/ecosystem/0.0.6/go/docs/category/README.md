# Category

### Available Operations

* [CategoriesAll](#categoriesall) - List categories
* [CategoriesOne](#categoriesone) - Get category
* [CategoryListingsAll](#categorylistingsall) - List category listings

## CategoriesAll

List categories

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
    res, err := s.Category.CategoriesAll(ctx, operations.CategoriesAllRequest{
        Cursor: sdk.String("quibusdam"),
        EcosystemID: "unde",
        Limit: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoriesResponse != nil {
        // handle response
    }
}
```

## CategoriesOne

Get category

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
    res, err := s.Category.CategoriesOne(ctx, operations.CategoriesOneRequest{
        EcosystemID: "corrupti",
        ID: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryResponse != nil {
        // handle response
    }
}
```

## CategoryListingsAll

List category listings

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
    res, err := s.Category.CategoryListingsAll(ctx, operations.CategoryListingsAllRequest{
        Cursor: sdk.String("at"),
        EcosystemID: "at",
        ID: "f7cc78ca-1ba9-428f-8816-742cb7392059",
        Limit: sdk.Int64(149675),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListingsResponse != nil {
        // handle response
    }
}
```
