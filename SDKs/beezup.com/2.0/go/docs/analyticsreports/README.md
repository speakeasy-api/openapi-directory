# AnalyticsReports

### Available Operations

* [DeleteReportFilter](#deletereportfilter) - Delete the report filter
* [GetReportFilter](#getreportfilter) - Get the report filter description
* [GetReportFilters](#getreportfilters) - Get report filter list for the given store
* [SaveReportFilter](#savereportfilter) - Save the report filter

## DeleteReportFilter

Delete the report filter

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
    res, err := s.AnalyticsReports.DeleteReportFilter(ctx, operations.DeleteReportFilterRequest{
        ReportFilterID: "architecto",
        StoreID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReportFilter

Get the report filter description

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
    res, err := s.AnalyticsReports.GetReportFilter(ctx, operations.GetReportFilterRequest{
        ReportFilterID: "reiciendis",
        StoreID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportFilter != nil {
        // handle response
    }
}
```

## GetReportFilters

Get report filter list for the given store

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
    res, err := s.AnalyticsReports.GetReportFilters(ctx, operations.GetReportFiltersRequest{
        StoreID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportFilterList != nil {
        // handle response
    }
}
```

## SaveReportFilter

Save the report filter

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
    res, err := s.AnalyticsReports.SaveReportFilter(ctx, operations.SaveReportFilterRequest{
        ReportFilterID: "laborum",
        SaveReportFilterRequest: shared.SaveReportFilterRequest{
            Parameters: shared.ReportFilterParameters{
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
                        "dolorem": shared.AnalyticsProductColumnFilter{
                            OperatorName: "corporis",
                            Values: []string{
                                "nobis",
                            },
                        },
                    },
                    Sku: sdk.String("M1234"),
                    Title: sdk.String("Refrigérateur"),
                },
                BeginPeriodUtcDate: types.MustTimeFromString("2006-11-20T00:00:00Z"),
                CategoryFilter: &shared.BeezUPCommonCatalogCategoryFilter{
                    CategoryPath: []string{
                        "omnis",
                        "nemo",
                    },
                },
                ChannelID: sdk.String("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
                EndPeriodUtcDate: types.MustTimeFromString("2006-12-20T00:00:00Z"),
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
                },
                ProductState: shared.ProductStateFilterEnumAll.ToPointer(),
                ReportType: shared.ReportTypeEnumByProduct,
            },
            ReportFilterName: "My report filter",
        },
        StoreID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
