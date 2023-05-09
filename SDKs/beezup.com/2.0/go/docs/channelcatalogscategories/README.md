# ChannelCatalogsCategories

### Available Operations

* [ConfigureChannelCatalogCategory](#configurechannelcatalogcategory) - Configure channel catalog category
* [DisableChannelCatalogCategoryMapping](#disablechannelcatalogcategorymapping) - Disable a channel catalog category mapping
* [GetChannelCatalogCategories](#getchannelcatalogcategories) - Get channel catalog categories
* [ReenableChannelCatalogCategoryMapping](#reenablechannelcatalogcategorymapping) - Reenable a channel catalog category mapping

## ConfigureChannelCatalogCategory

Configure channel catalog category

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
    res, err := s.ChannelCatalogsCategories.ConfigureChannelCatalogCategory(ctx, operations.ConfigureChannelCatalogCategoryRequest{
        ChannelCatalogID: "aut",
        ConfigureCategoryRequest: shared.ConfigureCategoryRequest{
            ChannelCatalogCategories: []shared.ChannelCatalogCategoryConfiguration{
                shared.ChannelCatalogCategoryConfiguration{
                    AutoMapNewSubCategories: true,
                    CatalogCategoryPath: []string{
                        "nulla",
                        "fugit",
                    },
                    ChannelCategoryPath: []string{
                        "maiores",
                        "doloribus",
                        "iusto",
                        "eligendi",
                    },
                    CostValue: sdk.Float64(10.21),
                },
                shared.ChannelCatalogCategoryConfiguration{
                    AutoMapNewSubCategories: true,
                    CatalogCategoryPath: []string{
                        "alias",
                        "officia",
                    },
                    ChannelCategoryPath: []string{
                        "ipsam",
                        "ea",
                    },
                    CostValue: sdk.Float64(10.21),
                },
                shared.ChannelCatalogCategoryConfiguration{
                    AutoMapNewSubCategories: true,
                    CatalogCategoryPath: []string{
                        "vel",
                    },
                    ChannelCategoryPath: []string{
                        "magnam",
                        "ratione",
                        "ex",
                        "laudantium",
                    },
                    CostValue: sdk.Float64(10.21),
                },
                shared.ChannelCatalogCategoryConfiguration{
                    AutoMapNewSubCategories: true,
                    CatalogCategoryPath: []string{
                        "dolor",
                    },
                    ChannelCategoryPath: []string{
                        "quasi",
                        "ex",
                        "nulla",
                        "excepturi",
                    },
                    CostValue: sdk.Float64(10.21),
                },
            },
            OverrideSubCategoryMappings: true,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableChannelCatalogCategoryMapping

Disable a channel catalog category mapping

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
    res, err := s.ChannelCatalogsCategories.DisableChannelCatalogCategoryMapping(ctx, operations.DisableChannelCatalogCategoryMappingRequest{
        ChannelCatalogID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelCatalogCategories

Get channel catalog categories

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
    res, err := s.ChannelCatalogsCategories.GetChannelCatalogCategories(ctx, operations.GetChannelCatalogCategoriesRequest{
        ChannelCatalogID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogCategoryConfigurationList != nil {
        // handle response
    }
}
```

## ReenableChannelCatalogCategoryMapping

Reenable a channel catalog category mapping

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
    res, err := s.ChannelCatalogsCategories.ReenableChannelCatalogCategoryMapping(ctx, operations.ReenableChannelCatalogCategoryMappingRequest{
        ChannelCatalogID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
