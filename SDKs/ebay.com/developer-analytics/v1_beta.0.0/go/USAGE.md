<!-- Start SDK Example Usage -->
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
    res, err := s.RateLimit.GetRateLimits(ctx, operations.GetRateLimitsRequest{
        APIContext: sdk.String("corrupti"),
        APIName: sdk.String("provident"),
    }, operations.GetRateLimitsSecurity{
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