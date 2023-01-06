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
    
    req := operations.GetAPIActivityRequest{
        Security: operations.GetAPIActivitySecurity{
            ConnectToken: shared.SchemeConnectToken{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAPIActivityQueryParams{
            Limit: 2259404117704393152,
            Offset: 6050128673802995827,
        },
    }
    
    res, err := s.Activity.GetAPIActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIRequests != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->