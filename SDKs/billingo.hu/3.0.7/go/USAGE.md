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
            AccountNumber: "sit",
            AccountNumberIban: "voluptas",
            Currency: "HRK",
            Name: "expedita",
            NeedQr: true,
            Swift: "dolor",
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