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
    
    req := operations.AccountDetailAPIIDRequest{
        Security: operations.AccountDetailAPIIDSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
    }
    
    res, err := s.AccountDetailAPI.AccountDetailAPIID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Sample != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->