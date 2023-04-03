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
        Limit: 10,
        Offset: 50,
    }

    ctx := context.Background()
    res, err := s.Activity.GetAPIActivity(ctx, req, operations.GetAPIActivitySecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIRequests != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->