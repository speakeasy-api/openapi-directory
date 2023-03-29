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
            AcceptLanguage: "unde",
        },
        Request: shared.CreateServiceMetricsTaskRequest{
            FeedType: "deserunt",
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: "porro",
                EvaluationMarketplaceID: "nulla",
                ListingCategories: []string{
                    "vero",
                    "perspiciatis",
                    "nulla",
                },
                ShippingRegions: []string{
                    "fuga",
                    "facilis",
                },
            },
            SchemaVersion: "eum",
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