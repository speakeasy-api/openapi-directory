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

    req := operations.GetCompaniesCompanyIDAPICredentialsRequest{
        Security: operations.GetCompaniesCompanyIDAPICredentialsSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetCompaniesCompanyIDAPICredentialsPathParams{
            CompanyID: "unde",
        },
        QueryParams: operations.GetCompaniesCompanyIDAPICredentialsQueryParams{
            PageNumber: 592845,
            PageSize: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyAPICredentialsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->