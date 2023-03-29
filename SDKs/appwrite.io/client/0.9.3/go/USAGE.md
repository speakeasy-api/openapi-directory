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

    req := operations.AccountCreateRequest{
        Security: operations.AccountCreateSecurity{
            Project: shared.SchemeProject{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AccountCreateRequestBody{
            Email: "Larry_Rau85@yahoo.com",
            Name: "perspiciatis",
            Password: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.Account.AccountCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->