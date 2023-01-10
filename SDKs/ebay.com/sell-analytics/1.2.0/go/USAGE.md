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
    
    req := operations.GetCustomerServiceMetricRequest{
        Security: operations.GetCustomerServiceMetricSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetCustomerServiceMetricPathParams{
            CustomerServiceMetricType: "consequuntur",
            EvaluationType: "sunt",
        },
        QueryParams: operations.GetCustomerServiceMetricQueryParams{
            EvaluationMarketplaceID: "quo",
        },
    }
    
    res, err := s.CustomerServiceMetric.GetCustomerServiceMetric(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerServiceMetricResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->