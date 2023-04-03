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
    res, err := s.User.GetUser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->