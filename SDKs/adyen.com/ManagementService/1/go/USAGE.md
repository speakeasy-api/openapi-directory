<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, operations.GetCompaniesCompanyIDAPICredentialsRequest{
        CompanyID: "corrupti",
        PageNumber: sdk.Int(592845),
        PageSize: sdk.Int(715190),
    }, operations.GetCompaniesCompanyIDAPICredentialsSecurity{
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