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

    req := operations.GetRateLimitsRequest{
        Security: operations.GetRateLimitsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetRateLimitsQueryParams{
            APIContext: "corrupti",
            APIName: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.RateLimit.GetRateLimits(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RateLimitsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->