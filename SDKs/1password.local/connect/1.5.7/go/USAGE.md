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

    req := operations.GetAPIActivityRequest{
        Security: operations.GetAPIActivitySecurity{
            ConnectToken: shared.SchemeConnectToken{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAPIActivityQueryParams{
            Limit: 10,
            Offset: 50,
        },
    }

    ctx := context.Background()
    res, err := s.Activity.GetAPIActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIRequests != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->