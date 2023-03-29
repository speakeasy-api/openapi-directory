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

    req := operations.CreateAccountRequest{
        Request: &shared.CreateAccount{
            FtpPassword: "unde",
            Identifier: "deserunt",
            ServicepackID: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.CreateAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->