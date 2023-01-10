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
    
    req := operations.AccountCreateRequest{
        Security: operations.AccountCreateSecurity{
            Project: shared.SchemeProject{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AccountCreateRequestBody{
            Email: "unde",
            Name: "ullam",
            Password: "assumenda",
        },
    }
    
    res, err := s.Account.AccountCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->