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

    ctx := context.Background()
    res, err := s.Account.UsersGetUserMetadata(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetUserMetadata200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->