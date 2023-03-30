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

    req := operations.AdminGetUserRequest{
        PathParams: operations.AdminGetUserPathParams{
            ID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.Admin.AdminGetUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminGetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->