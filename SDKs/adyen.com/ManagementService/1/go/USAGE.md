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
        CompanyID: "corrupti",
        PageNumber: 592845,
        PageSize: 715190,
    }

    ctx := context.Background()
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, req, operations.GetCompaniesCompanyIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyAPICredentialsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->