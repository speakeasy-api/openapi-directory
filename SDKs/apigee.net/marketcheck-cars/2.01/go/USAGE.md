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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthorizeEndpoint: shared.SchemeAuthorizeEndpoint{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.CrmCheckRequest{
        PathParams: operations.CrmCheckPathParams{
            Vin: "corrupti",
        },
        QueryParams: operations.CrmCheckQueryParams{
            APIKey: "provident",
            SaleDate: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.CRMCleanseAPI.CrmCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CRMResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->