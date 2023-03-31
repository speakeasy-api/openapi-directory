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
        APIContext: "corrupti",
        APIName: "provident",
    }

    ctx := context.Background()
    res, err := s.RateLimit.GetRateLimits(ctx, req, operations.GetRateLimitsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RateLimitsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->