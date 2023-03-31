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

    req := operations.GetCustomerServiceMetricRequest{
        CustomerServiceMetricType: "corrupti",
        EvaluationMarketplaceID: "provident",
        EvaluationType: "distinctio",
    }

    ctx := context.Background()
    res, err := s.CustomerServiceMetric.GetCustomerServiceMetric(ctx, req, operations.GetCustomerServiceMetricSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerServiceMetricResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->