# Onboarding

### Available Operations

* [GetPaymentsProgramOnboarding](#getpaymentsprogramonboarding) - <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

## GetPaymentsProgramOnboarding

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

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
    res, err := s.Onboarding.GetPaymentsProgramOnboarding(ctx, operations.GetPaymentsProgramOnboardingRequest{
        MarketplaceID: "omnis",
        PaymentsProgramType: "necessitatibus",
    }, operations.GetPaymentsProgramOnboardingSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentsProgramOnboardingResponse != nil {
        // handle response
    }
}
```
