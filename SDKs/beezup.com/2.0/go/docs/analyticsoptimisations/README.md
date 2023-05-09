# AnalyticsOptimisations

### Available Operations

* [CopyOptimisation](#copyoptimisation) - Copy product optimisations between 2 channels
* [Optimise](#optimise) - Optimise products by page
* [OptimiseAll](#optimiseall) - Optimise all products
* [OptimiseByCategory](#optimisebycategory) - Optimise products by category
* [OptimiseByChannel](#optimisebychannel) - Optimise products by channel
* [OptimiseByProduct](#optimisebyproduct) - Optimise product

## CopyOptimisation

Copy product optimisations between 2 channels

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
    res, err := s.AnalyticsOptimisations.CopyOptimisation(ctx, operations.CopyOptimisationRequest{
        CopyOptimisationRequest: shared.CopyOptimisationRequest{
            ChannelIDSource: "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            ChannelIDTarget: "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            KeepExistingOptimisation: true,
        },
        StoreID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyOptimisationResponse != nil {
        // handle response
    }
}
```

## Optimise

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalyticsOptimisations.Optimise(ctx, operations.OptimiseRequest{
        ActionName: shared.OptimisationActionNameGeneralParametersEnumDisable,
        OptimiseRequest: shared.OptimiseRequest{
            AdvancedFilters: shared.ReportAdvancedFilters{
                GlobalMarginPercent: sdk.Int64(10),
                LinkClickToOrderMaxDay: sdk.Int64(5),
                LinkClickToOrderType: shared.LinkClickToOrderTypeEnumOnClickDate,
                MarginType: shared.MarginTypeEnumGlobal,
                OnlyDirectSales: true,
                OnlyPaymentValidatedOrders: true,
                PerformanceIndicatorFormula: shared.PerformanceIndicatorFormula{
                    FirstParameter: shared.PerformanceIndicatorFormulaParameterTypeEnumCost.ToPointer(),
                    OperatorName: shared.PerformanceIndicatorFormulaOperatorNameEnumMultiply.ToPointer(),
                    SecondParameter: shared.PerformanceIndicatorFormulaParameterTypeEnumCost.ToPointer(),
                    ThirdParameter: sdk.Int64(100),
                },
            },
            AnalyticsProductColumnFilters: &shared.AnalyticsProductColumnFilters{
                AdditionalAnalyticsProductColumnFilters: map[string]shared.AnalyticsProductColumnFilter{
                    "unde": shared.AnalyticsProductColumnFilter{
                        OperatorName: "nulla",
                        Values: []string{
                            "illum",
                            "vel",
                            "error",
                        },
                    },
                    "deserunt": shared.AnalyticsProductColumnFilter{
                        OperatorName: "suscipit",
                        Values: []string{
                            "magnam",
                            "debitis",
                        },
                    },
                    "ipsa": shared.AnalyticsProductColumnFilter{
                        OperatorName: "delectus",
                        Values: []string{
                            "suscipit",
                            "molestiae",
                        },
                    },
                    "minus": shared.AnalyticsProductColumnFilter{
                        OperatorName: "placeat",
                        Values: []string{
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                    },
                },
                Sku: sdk.String("M1234"),
                Title: sdk.String("Refrigérateur"),
            },
            BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
            CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
            },
            ChannelID: sdk.String("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
            EndPeriodUtcDate: types.MustTimeFromString("2006-12-20T00:00:00Z"),
            OrderBy: shared.PerformanceIndicatorTypeEnumCost.ToPointer(),
            OrderByDirection: shared.OrderByDirectionEnumAscending.ToPointer(),
            PageNumber: sdk.Int(1),
            PageSize: sdk.Int(100),
            PerformanceIndicatorFilters: []shared.PerformanceIndicatorFilter{
                shared.PerformanceIndicatorFilter{
                    OperatorName: "Equals",
                    PerformanceIndicator: shared.PerformanceIndicatorTypeEnumCost,
                    Value: 10.42,
                },
                shared.PerformanceIndicatorFilter{
                    OperatorName: "Equals",
                    PerformanceIndicator: shared.PerformanceIndicatorTypeEnumCost,
                    Value: 10.42,
                },
                shared.PerformanceIndicatorFilter{
                    OperatorName: "Equals",
                    PerformanceIndicator: shared.PerformanceIndicatorTypeEnumCost,
                    Value: 10.42,
                },
            },
            PeriodType: shared.ReportFilterPeriodTypeEnumCustom,
            ProductColumnsToDisplay: []string{
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
            },
            ProductState: shared.ProductStateFilterEnumAll.ToPointer(),
            ReportType: shared.ReportTypeEnumByProduct,
        },
        StoreID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OptimiseAll

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalyticsOptimisations.OptimiseAll(ctx, operations.OptimiseAllRequest{
        ActionName: shared.OptimisationActionNameGeneralParametersEnumDisable,
        OptimiseAllRequest: shared.OptimiseAllRequest{
            AdvancedFilters: shared.ReportAdvancedFilters{
                GlobalMarginPercent: sdk.Int64(10),
                LinkClickToOrderMaxDay: sdk.Int64(5),
                LinkClickToOrderType: shared.LinkClickToOrderTypeEnumOnClickDate,
                MarginType: shared.MarginTypeEnumGlobal,
                OnlyDirectSales: true,
                OnlyPaymentValidatedOrders: true,
                PerformanceIndicatorFormula: shared.PerformanceIndicatorFormula{
                    FirstParameter: shared.PerformanceIndicatorFormulaParameterTypeEnumCost.ToPointer(),
                    OperatorName: shared.PerformanceIndicatorFormulaOperatorNameEnumMultiply.ToPointer(),
                    SecondParameter: shared.PerformanceIndicatorFormulaParameterTypeEnumCost.ToPointer(),
                    ThirdParameter: sdk.Int64(100),
                },
            },
            AnalyticsProductColumnFilters: &shared.AnalyticsProductColumnFilters{
                AdditionalAnalyticsProductColumnFilters: map[string]shared.AnalyticsProductColumnFilter{
                    "odit": shared.AnalyticsProductColumnFilter{
                        OperatorName: "at",
                        Values: []string{
                            "maiores",
                            "molestiae",
                            "quod",
                            "quod",
                        },
                    },
                    "esse": shared.AnalyticsProductColumnFilter{
                        OperatorName: "totam",
                        Values: []string{
                            "dolorum",
                            "dicta",
                            "nam",
                            "officia",
                        },
                    },
                    "occaecati": shared.AnalyticsProductColumnFilter{
                        OperatorName: "fugit",
                        Values: []string{
                            "hic",
                            "optio",
                            "totam",
                        },
                    },
                    "beatae": shared.AnalyticsProductColumnFilter{
                        OperatorName: "commodi",
                        Values: []string{
                            "modi",
                            "qui",
                        },
                    },
                },
                Sku: sdk.String("M1234"),
                Title: sdk.String("Refrigérateur"),
            },
            BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
            CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
            },
            ChannelID: sdk.String("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
            EndPeriodUtcDate: types.MustTimeFromString("2006-12-20T00:00:00Z"),
            OrderBy: shared.PerformanceIndicatorTypeEnumCost.ToPointer(),
            OrderByDirection: shared.OrderByDirectionEnumAscending.ToPointer(),
            PerformanceIndicatorFilters: []shared.PerformanceIndicatorFilter{
                shared.PerformanceIndicatorFilter{
                    OperatorName: "Equals",
                    PerformanceIndicator: shared.PerformanceIndicatorTypeEnumCost,
                    Value: 10.42,
                },
            },
            PeriodType: shared.ReportFilterPeriodTypeEnumCustom,
            ProductColumnsToDisplay: []string{
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
            },
            ProductState: shared.ProductStateFilterEnumAll.ToPointer(),
            ReportType: shared.ReportTypeEnumByProduct,
        },
        StoreID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OptimiseByCategory

/!\ WARNING /!\ \
This operation will reenable or disable products's category for every channel indicated in the body.


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
    res, err := s.AnalyticsOptimisations.OptimiseByCategory(ctx, operations.OptimiseByCategoryRequest{
        RequestBody: []string{
            "iste",
        },
        ActionName: shared.OptimisationActionNameGeneralParametersEnumReenable,
        CatalogCategoryID: "natus",
        StoreID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OptimiseByChannel

/!\ WARNING /!\ \
Apply the operation on every product on this channel.


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
    res, err := s.AnalyticsOptimisations.OptimiseByChannel(ctx, operations.OptimiseByChannelRequest{
        ActionName: shared.OptimisationActionNameGeneralParametersEnumDisable,
        ChannelID: "saepe",
        StoreID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OptimiseByProduct

/!\ WARNING /!\ \
This operation will reenable or disable this product for every channel indicated in the body.


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
    res, err := s.AnalyticsOptimisations.OptimiseByProduct(ctx, operations.OptimiseByProductRequest{
        RequestBody: []string{
            "corporis",
            "iste",
        },
        ActionName: shared.OptimisationActionNameGeneralParametersEnumReenable,
        ProductID: "saepe",
        StoreID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
