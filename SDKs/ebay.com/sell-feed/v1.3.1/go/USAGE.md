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
        Security: operations.CreateCustomerServiceMetricTaskSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateCustomerServiceMetricTaskHeaders{
            AcceptLanguage: "corrupti",
        },
        Request: shared.CreateServiceMetricsTaskRequest{
            FeedType: "provident",
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: "distinctio",
                EvaluationMarketplaceID: "quibusdam",
                ListingCategories: []string{
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
    }

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->