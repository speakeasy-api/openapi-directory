# AdvertisingEligibility

### Available Operations

* [GetAdvertisingEligibility](#getadvertisingeligibility) - This method allows developers to check the seller eligibility status for eBay advertising programs.

## GetAdvertisingEligibility

This method allows developers to check the seller eligibility status for eBay advertising programs.

### Example Usage

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
    res, err := s.AdvertisingEligibility.GetAdvertisingEligibility(ctx, operations.GetAdvertisingEligibilityRequest{
        XEbayCMarketplaceID: "distinctio",
        ProgramTypes: sdk.String("quibusdam"),
    }, operations.GetAdvertisingEligibilitySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SellerEligibilityMultiProgramResponse != nil {
        // handle response
    }
}
```
