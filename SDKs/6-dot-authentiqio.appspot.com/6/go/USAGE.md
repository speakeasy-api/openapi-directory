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

    req := operations.KeyRevokeRequest{
        PathParams: operations.KeyRevokePathParams{
            Pk: "corrupti",
        },
        QueryParams: operations.KeyRevokeQueryParams{
            Secret: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.Delete.KeyRevoke(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevoke200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->