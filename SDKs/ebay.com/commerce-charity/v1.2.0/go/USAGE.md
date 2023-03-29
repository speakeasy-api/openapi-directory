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
        Security: operations.GetCharityOrgSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetCharityOrgPathParams{
            CharityOrgID: "unde",
        },
        Headers: operations.GetCharityOrgHeaders{
            XEbayCMarketplaceID: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.CharityOrg.GetCharityOrg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CharityOrg != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->