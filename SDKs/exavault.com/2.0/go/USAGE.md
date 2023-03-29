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

    req := operations.GetAccountRequest{
        QueryParams: operations.GetAccountQueryParams{
            Include: "masterUser",
        },
        Headers: operations.GetAccountHeaders{
            EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
            EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        },
    }

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->