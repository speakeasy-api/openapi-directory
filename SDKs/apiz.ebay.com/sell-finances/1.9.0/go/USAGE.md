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
    
    req := operations.GetPayoutRequest{
        Security: operations.GetPayoutSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetPayoutPathParams{
            PayoutID: "qui",
        },
    }
    
    res, err := s.Payout.GetPayout(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Payout != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->