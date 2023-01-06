<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateBankAccountRequest{
        Request: shared.BankAccountInput{
            AccountNumber: "dolorum",
            AccountNumberIban: "dolores",
            Currency: "HRK",
            Name: "ab",
            NeedQr: false,
            Swift: "sit",
        },
    }
    
    res, err := s.BankAccount.CreateBankAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->