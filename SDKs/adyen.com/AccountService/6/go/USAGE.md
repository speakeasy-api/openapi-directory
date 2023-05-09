<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, shared.CloseAccountHolderRequest{
        AccountHolderCode: "corrupti",
    }, operations.PostCloseAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountHolderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->