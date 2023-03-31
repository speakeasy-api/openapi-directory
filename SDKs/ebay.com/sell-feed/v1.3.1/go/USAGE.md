<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateCustomerServiceMetricTaskRequest{
        CreateServiceMetricsTaskRequest: shared.CreateServiceMetricsTaskRequest{
            FeedType: "corrupti",
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: "provident",
                EvaluationMarketplaceID: "distinctio",
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
            SchemaVersion: "suscipit",
        },
        AcceptLanguage: "iure",
    }

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, req, operations.CreateCustomerServiceMetricTaskSecurity{
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