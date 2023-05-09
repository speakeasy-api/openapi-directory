# HostedOnboardingPage

### Available Operations

* [PostGetOnboardingURL](#postgetonboardingurl) - Get a link to a Adyen-hosted onboarding page

## PostGetOnboardingURL

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.HostedOnboardingPage.PostGetOnboardingURL(ctx, shared.GetOnboardingURLRequest{
        AccountHolderCode: "nulla",
        CollectInformation: &shared.CollectInformation{
            BankDetails: sdk.Bool(false),
            BusinessDetails: sdk.Bool(false),
            IndividualDetails: sdk.Bool(false),
            LegalArrangementDetails: sdk.Bool(false),
            PciQuestionnaire: sdk.Bool(false),
            ShareholderDetails: sdk.Bool(false),
        },
        EditMode: sdk.Bool(false),
        MobileOAuthCallbackURL: sdk.String("corrupti"),
        PlatformName: sdk.String("illum"),
        ReturnURL: sdk.String("vel"),
        ShopperLocale: sdk.String("error"),
        ShowPages: &shared.ShowPages{
            BankDetailsSummaryPage: sdk.Bool(false),
            BankVerificationPage: sdk.Bool(false),
            BusinessDetailsSummaryPage: sdk.Bool(false),
            ChecksOverviewPage: sdk.Bool(false),
            IndividualDetailsSummaryPage: sdk.Bool(false),
            LegalArrangementsDetailsSummaryPage: sdk.Bool(false),
            ManualBankAccountPage: sdk.Bool(false),
            ShareholderDetailsSummaryPage: sdk.Bool(false),
            WelcomePage: sdk.Bool(false),
        },
    }, operations.PostGetOnboardingURLSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOnboardingURLResponse != nil {
        // handle response
    }
}
```
