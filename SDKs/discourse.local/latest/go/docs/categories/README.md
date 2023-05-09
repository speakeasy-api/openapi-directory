# Categories

### Available Operations

* [CreateCategory](#createcategory) - Creates a category
* [GetCategory](#getcategory) - Show category
* [GetSite](#getsite) - Get site info
* [ListCategories](#listcategories) - Retrieves a list of categories
* [ListCategoryTopics](#listcategorytopics) - List topics
* [UpdateCategory](#updatecategory) - Updates a category

## CreateCategory

Creates a category

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
    res, err := s.Categories.CreateCategory(ctx, operations.CreateCategoryRequestBody{
        AllowBadges: sdk.Bool(false),
        Color: sdk.String("totam"),
        FormTemplateIds: []interface{}{
            "dolorum",
            "dicta",
            "nam",
            "officia",
        },
        Name: "Wayne Lind",
        ParentCategoryID: sdk.Int64(521848),
        Permissions: map[string]interface{}{
            "commodi": "molestiae",
        },
        SearchPriority: sdk.Int64(264555),
        Slug: sdk.String("qui"),
        TextColor: sdk.String("impedit"),
        TopicFeaturedLinksAllowed: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCategory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCategory

Show category

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
    res, err := s.Categories.GetCategory(ctx, operations.GetCategoryRequest{
        ID: 736918,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSite

Can be used to fetch all categories and subcategories

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
    res, err := s.Categories.GetSite(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSite200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListCategories

Retrieves a list of categories

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
    res, err := s.Categories.ListCategories(ctx, operations.ListCategoriesRequest{
        IncludeSubcategories: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListCategoryTopics

List topics

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
    res, err := s.Categories.ListCategoryTopics(ctx, operations.ListCategoryTopicsRequest{
        ID: 456150,
        Slug: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCategoryTopics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateCategory

Updates a category

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
    res, err := s.Categories.UpdateCategory(ctx, operations.UpdateCategoryRequest{
        RequestBody: &operations.UpdateCategoryRequestBody{
            AllowBadges: sdk.Bool(false),
            Color: sdk.String("excepturi"),
            FormTemplateIds: []interface{}{
                "perferendis",
            },
            Name: "Faye Cormier",
            ParentCategoryID: sdk.Int64(616934),
            Permissions: map[string]interface{}{
                "hic": "saepe",
                "fuga": "in",
            },
            SearchPriority: sdk.Int64(359508),
            Slug: sdk.String("iste"),
            TextColor: sdk.String("iure"),
            TopicFeaturedLinksAllowed: sdk.Bool(false),
        },
        ID: 902349,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCategory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
