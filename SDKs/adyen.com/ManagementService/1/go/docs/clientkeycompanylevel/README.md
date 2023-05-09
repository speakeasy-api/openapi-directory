# ClientKeyCompanyLevel

### Available Operations

* [PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKey](#postcompaniescompanyidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

## PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKey

Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

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
    res, err := s.ClientKeyCompanyLevel.PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKey(ctx, operations.PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKeyRequest{
        APICredentialID: "ad",
        CompanyID: "eum",
    }, operations.PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKeySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateClientKeyResponse != nil {
        // handle response
    }
}
```
