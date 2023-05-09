<!-- Start SDK Example Usage -->
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
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, operations.CreateCustomerServiceMetricTaskRequest{
        CreateServiceMetricsTaskRequest: shared.CreateServiceMetricsTaskRequest{
            FeedType: sdk.String("corrupti"),
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: sdk.String("provident"),
                EvaluationMarketplaceID: sdk.String("distinctio"),
                ListingCategories: []string{
                    "unde",
                    "nulla",
                    "corrupti",
                    "illum",
                },
                ShippingRegions: []string{
                    "error",
                    "deserunt",
                },
            },
            SchemaVersion: sdk.String("suscipit"),
        },
        AcceptLanguage: "iure",
    }, operations.CreateCustomerServiceMetricTaskSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->