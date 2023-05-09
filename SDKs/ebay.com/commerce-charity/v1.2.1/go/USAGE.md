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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CharityOrg.GetCharityOrg(ctx, operations.GetCharityOrgRequest{
        XEbayCMarketplaceID: "corrupti",
        CharityOrgID: "provident",
    }, operations.GetCharityOrgSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CharityOrg != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->