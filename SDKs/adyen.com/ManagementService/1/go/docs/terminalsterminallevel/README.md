# TerminalsTerminalLevel

### Available Operations

* [GetTerminals](#getterminals) - Get a list of terminals

## GetTerminals

Returns the payment terminals that the API credential has access to and that match the query parameters. 
When using `searchQuery`, other query parameters are ignored.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API — Terminal actions read

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
    res, err := s.TerminalsTerminalLevel.GetTerminals(ctx, operations.GetTerminalsRequest{
        BrandModels: sdk.String("eum"),
        Countries: sdk.String("nemo"),
        MerchantIds: sdk.String("illum"),
        PageNumber: sdk.Int(201266),
        PageSize: sdk.Int(22331),
        SearchQuery: sdk.String("odio"),
        StoreIds: sdk.String("minus"),
    }, operations.GetTerminalsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTerminalsResponse != nil {
        // handle response
    }
}
```
