# AnalyticsStatistics

### Available Operations

* [GetStoreReportByCategory](#getstorereportbycategory) - Get the report by category
* [GetStoreReportByChannel](#getstorereportbychannel) - Get the report by channel
* [GetStoreReportByDay](#getstorereportbyday) - Get the report by day for a StoreId
* [GetStoreReportByDayPerStore](#getstorereportbydayperstore) - Get the report by day for a StoreId
* [GetStoreReportByProduct](#getstorereportbyproduct) - Get the report by product

## GetStoreReportByCategory

Get the report by category

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
    res, err := s.AnalyticsStatistics.GetStoreReportByCategory(ctx, operations.GetStoreReportByCategoryRequest{
        ReportByCategoryRequest: shared.ReportByCategoryRequest{
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
            BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
            CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "odit",
                    "quo",
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
            },
            PeriodType: shared.ReportFilterPeriodTypeEnumLast3Months,
        },
        StoreID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportByCategoryResponse != nil {
        // handle response
    }
}
```

## GetStoreReportByChannel

Get the report by channel

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
    res, err := s.AnalyticsStatistics.GetStoreReportByChannel(ctx, operations.GetStoreReportByChannelRequest{
        ReportByChannelRequest: shared.ReportByChannelRequest{
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
            BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
            CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "possimus",
                    "aut",
                    "quasi",
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
            PeriodType: shared.ReportFilterPeriodTypeEnumLast90Days,
        },
        StoreID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportByChannelResponse != nil {
        // handle response
    }
}
```

## GetStoreReportByDay

Get the report by day for a StoreId

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
    res, err := s.AnalyticsStatistics.GetStoreReportByDay(ctx, operations.GetStoreReportByDayRequest{
        ReportByDayRequest: shared.ReportByDayRequest{
            AdvancedFilters: &shared.ReportAdvancedFilters{
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
            BeginPeriodUtcDate: types.MustDateFromString("2006-11-20T00:00:00Z"),
            CatalogCategoryID: sdk.String("81a058a6-0451-4b79-84ef-94c58d0ed4ac"),
            ChannelIds: []string{
                "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            },
            EndPeriodUtcDate: types.MustDateFromString("2006-12-20T00:00:00Z"),
            ProductID: sdk.String("578419df-1bbf-41a6-96fa-862e42182b67"),
        },
        StoreID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportByDayResponse != nil {
        // handle response
    }
}
```

## GetStoreReportByDayPerStore

Get the report by day for a StoreId

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalyticsStatistics.GetStoreReportByDayPerStore(ctx, shared.ReportByDayRequest{
        AdvancedFilters: &shared.ReportAdvancedFilters{
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
        BeginPeriodUtcDate: types.MustDateFromString("2006-11-20T00:00:00Z"),
        CatalogCategoryID: sdk.String("81a058a6-0451-4b79-84ef-94c58d0ed4ac"),
        ChannelIds: []string{
            "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
            "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
        },
        EndPeriodUtcDate: types.MustDateFromString("2006-12-20T00:00:00Z"),
        ProductID: sdk.String("578419df-1bbf-41a6-96fa-862e42182b67"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportByDayPerStoreResponse != nil {
        // handle response
    }
}
```

## GetStoreReportByProduct

Get the report by product

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
    res, err := s.AnalyticsStatistics.GetStoreReportByProduct(ctx, operations.GetStoreReportByProductRequest{
        ReportByProductRequest: shared.ReportByProductRequest{
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
                    "nihil": shared.AnalyticsProductColumnFilter{
                        OperatorName: "praesentium",
                        Values: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                    },
                    "perferendis": shared.AnalyticsProductColumnFilter{
                        OperatorName: "doloremque",
                        Values: []string{
                            "ut",
                            "maiores",
                        },
                    },
                    "dicta": shared.AnalyticsProductColumnFilter{
                        OperatorName: "corporis",
                        Values: []string{
                            "iusto",
                            "dicta",
                        },
                    },
                    "harum": shared.AnalyticsProductColumnFilter{
                        OperatorName: "enim",
                        Values: []string{
                            "commodi",
                            "repudiandae",
                            "quae",
                            "ipsum",
                        },
                    },
                },
                Sku: sdk.String("M1234"),
                Title: sdk.String("Refrigérateur"),
            },
            BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
            CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                CategoryPath: []string{
                    "molestias",
                    "excepturi",
                    "pariatur",
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
            },
            PeriodType: shared.ReportFilterPeriodTypeEnumLast30Days,
            ProductColumnsToDisplay: []string{
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
                "bea7c21e-948b-4ac3-9ffd-4396e62c4163",
            },
            ProductState: shared.ProductStateFilterEnumAll,
        },
        StoreID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportByProductResponse != nil {
        // handle response
    }
}
```
