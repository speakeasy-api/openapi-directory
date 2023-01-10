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
    
    req := operations.AccountCreateRecoveryRequest{
        Security: operations.AccountCreateRecoverySecurity{
            JWT: shared.SchemeJwt{
                APIKey: "YOUR_API_KEY_HERE",
            },
            Project: shared.SchemeProject{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AccountCreateRecoveryRequestBody{
            Email: "amet",
            URL: "sequi",
        },
    }
    
    res, err := s.Account.AccountCreateRecovery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->