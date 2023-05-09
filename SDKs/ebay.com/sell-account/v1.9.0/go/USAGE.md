<!-- Start SDK Example Usage -->
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
        XEbayCMarketplaceID: "corrupti",
        ProgramTypes: sdk.String("provident"),
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
<!-- End SDK Example Usage -->