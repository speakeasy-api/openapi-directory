<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AcceptLanguage: "voluptas",
        },
        Request: shared.CreateServiceMetricsTaskRequest{
            FeedType: "et",
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: "culpa",
                EvaluationMarketplaceID: "odio",
                ListingCategories: []string{
                    "voluptas",
                },
                ShippingRegions: []string{
                    "corrupti",
                },
            },
            SchemaVersion: "qui",
        },
    }
    
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->