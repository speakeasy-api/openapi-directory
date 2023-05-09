# Trending

## Overview

trending

### Available Operations

* [TrendingGetTrendingCategories](#trendinggettrendingcategories) - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* [TrendingGetTrendingCategory](#trendinggettrendingcategory) - Returns paginated lists of trending items for a category.
* [TrendingGetTrendingEntryDetail](#trendinggettrendingentrydetail) - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

## TrendingGetTrendingCategories

Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.

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
    res, err := s.Trending.TrendingGetTrendingCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TrendingGetTrendingCategory

Returns paginated lists of trending items for a category.

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
    res, err := s.Trending.TrendingGetTrendingCategory(ctx, operations.TrendingGetTrendingCategoryRequest{
        CategoryID: "doloribus",
        PageNumber: 891924,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TrendingGetTrendingEntryDetail

Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

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
    res, err := s.Trending.TrendingGetTrendingEntryDetail(ctx, operations.TrendingGetTrendingEntryDetailRequest{
        Identifier: "eius",
        TrendingEntryType: 806194,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
