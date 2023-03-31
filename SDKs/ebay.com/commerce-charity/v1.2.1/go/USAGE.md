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

    req := operations.GetCharityOrgRequest{
        XEbayCMarketplaceID: "corrupti",
        CharityOrgID: "provident",
    }

    ctx := context.Background()
    res, err := s.CharityOrg.GetCharityOrg(ctx, req, operations.GetCharityOrgSecurity{
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