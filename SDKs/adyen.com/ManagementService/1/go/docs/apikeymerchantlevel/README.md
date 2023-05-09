# APIKeyMerchantLevel

### Available Operations

* [PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKey](#postmerchantsmerchantidapicredentialsapicredentialidgenerateapikey) - Generate new API key

## PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKey

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

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
    res, err := s.APIKeyMerchantLevel.PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKey(ctx, operations.PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKeyRequest{
        APICredentialID: "impedit",
        MerchantID: "cum",
    }, operations.PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKeySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAPIKeyResponse != nil {
        // handle response
    }
}
```
