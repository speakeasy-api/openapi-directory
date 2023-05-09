# ChannelCatalogsProducts

### Available Operations

* [ExportChannelCatalogProductInfoList](#exportchannelcatalogproductinfolist) - Export channel catalog product information list
* [GetChannelCatalogProductByChannelCatalog](#getchannelcatalogproductbychannelcatalog) - Get channel catalog products related to these channel catalogs
* [GetChannelCatalogProductInfo](#getchannelcatalogproductinfo) - Get channel catalog product information
* [GetChannelCatalogProductInfoList](#getchannelcatalogproductinfolist) - Get channel catalog product information list
* [GetChannelCatalogProductsCounters](#getchannelcatalogproductscounters) - Get channel catalog products' counters

## ExportChannelCatalogProductInfoList

Export channel catalog product information list

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
    res, err := s.ChannelCatalogsProducts.ExportChannelCatalogProductInfoList(ctx, operations.ExportChannelCatalogProductInfoListRequest{
        ChannelCatalogID: "eum",
        Format: shared.ExportFormatInQueryGeneralParameterEnumXlsx,
        GetChannelCatalogProductInfoListRequest: shared.GetChannelCatalogProductInfoListRequest{
            CatalogCategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "quas",
                    "assumenda",
                    "nulla",
                    "voluptas",
                },
            },
            ChannelCategoryFilter: &shared.BeezUPCommonChannelCategoryFilter{
                CategoryPath: []string{
                    "quasi",
                    "tempora",
                    "numquam",
                },
            },
            Criteria: shared.ProductSetVisibilityCriteria{
                Disabled: sdk.Bool(true),
                Excluded: sdk.Bool(true),
                Exist: sdk.Bool(true),
                Logic: shared.ProductSetVisibilityCriteriaLogicTypeEnumFunnel,
                Uncategorized: sdk.Bool(true),
            },
            Overridden: sdk.Bool(true),
            PageNumber: 1,
            PageSize: 100,
            ProductFilters: &shared.ChannelCatalogProductFilters{
                AdditionalProductFilters: map[string]shared.BeezUPCommonAdditionalProductFiltersValue{
                    "ipsa": shared.BeezUPCommonAdditionalProductFiltersValue{
                        OperatorName: sdk.String("molestiae"),
                        Values: []string{
                            "odio",
                            "eius",
                        },
                    },
                    "esse": shared.BeezUPCommonAdditionalProductFiltersValue{
                        OperatorName: sdk.String("esse"),
                        Values: []string{
                            "fuga",
                            "reprehenderit",
                            "quidem",
                        },
                    },
                    "fugiat": shared.BeezUPCommonAdditionalProductFiltersValue{
                        OperatorName: sdk.String("ut"),
                        Values: []string{
                            "suscipit",
                            "assumenda",
                        },
                    },
                },
                CatalogEans: []string{
                    "praesentium",
                },
                CatalogMpns: []string{
                    "veritatis",
                    "ipsa",
                    "id",
                    "quidem",
                },
                CatalogSkus: []string{
                    "quo",
                },
                ChannelEans: []string{
                    "quo",
                    "fuga",
                    "eius",
                    "eos",
                },
                ChannelMpns: []string{
                    "ab",
                    "cupiditate",
                },
                ChannelSkus: []string{
                    "tempora",
                },
                Title: sdk.String("Refrigérateur"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BeezUPCommonLink3 != nil {
        // handle response
    }
}
```

## GetChannelCatalogProductByChannelCatalog

Get channel catalog products related to these channel catalogs

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
    res, err := s.ChannelCatalogsProducts.GetChannelCatalogProductByChannelCatalog(ctx, shared.ChannelCatalogProductByChannelCatalogRequest{
        ChannelCatalogIds: []string{
            "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0",
            "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0",
            "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0",
            "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0",
        },
        ProductID: "578419df-1bbf-41a6-96fa-862e42182b67",
        StoreID: "64f43358-63a1-47f7-97ec-0301fc39956b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogProductByChannelCatalogResponse != nil {
        // handle response
    }
}
```

## GetChannelCatalogProductInfo

Get channel catalog product information

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
    res, err := s.ChannelCatalogsProducts.GetChannelCatalogProductInfo(ctx, operations.GetChannelCatalogProductInfoRequest{
        ChannelCatalogID: "ipsam",
        ProductID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogProductInfo != nil {
        // handle response
    }
}
```

## GetChannelCatalogProductInfoList

Get channel catalog product information list

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
    res, err := s.ChannelCatalogsProducts.GetChannelCatalogProductInfoList(ctx, operations.GetChannelCatalogProductInfoListRequest{
        ChannelCatalogID: "sequi",
        GetChannelCatalogProductInfoListRequest: shared.GetChannelCatalogProductInfoListRequest{
            CatalogCategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "esse",
                    "recusandae",
                    "aperiam",
                    "distinctio",
                },
            },
            ChannelCategoryFilter: &shared.BeezUPCommonChannelCategoryFilter{
                CategoryPath: []string{
                    "dignissimos",
                    "inventore",
                    "nihil",
                    "totam",
                },
            },
            Criteria: shared.ProductSetVisibilityCriteria{
                Disabled: sdk.Bool(true),
                Excluded: sdk.Bool(true),
                Exist: sdk.Bool(true),
                Logic: shared.ProductSetVisibilityCriteriaLogicTypeEnumCumulative,
                Uncategorized: sdk.Bool(true),
            },
            Overridden: sdk.Bool(true),
            PageNumber: 1,
            PageSize: 100,
            ProductFilters: &shared.ChannelCatalogProductFilters{
                AdditionalProductFilters: map[string]shared.BeezUPCommonAdditionalProductFiltersValue{
                    "odio": shared.BeezUPCommonAdditionalProductFiltersValue{
                        OperatorName: sdk.String("occaecati"),
                        Values: []string{
                            "sapiente",
                            "dolores",
                        },
                    },
                    "deserunt": shared.BeezUPCommonAdditionalProductFiltersValue{
                        OperatorName: sdk.String("molestiae"),
                        Values: []string{
                            "porro",
                        },
                    },
                },
                CatalogEans: []string{
                    "quas",
                    "praesentium",
                },
                CatalogMpns: []string{
                    "deleniti",
                },
                CatalogSkus: []string{
                    "fuga",
                },
                ChannelEans: []string{
                    "incidunt",
                    "atque",
                    "explicabo",
                },
                ChannelMpns: []string{
                    "nisi",
                    "fugit",
                },
                ChannelSkus: []string{
                    "consequuntur",
                    "ratione",
                    "explicabo",
                    "saepe",
                },
                Title: sdk.String("Refrigérateur"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogProductInfoList != nil {
        // handle response
    }
}
```

## GetChannelCatalogProductsCounters

Get channel catalog products' counters

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
    res, err := s.ChannelCatalogsProducts.GetChannelCatalogProductsCounters(ctx, operations.GetChannelCatalogProductsCountersRequest{
        ChannelCatalogID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogProductsCounters != nil {
        // handle response
    }
}
```
