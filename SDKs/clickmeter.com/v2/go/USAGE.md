<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountDeleteDomainWhitelist(ctx, operations.AccountDeleteDomainWhitelistRequest{
        WhitelistID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->