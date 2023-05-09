<!-- Start SDK Example Usage -->
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
        AccountHolderCode: "corrupti",
        CollectInformation: &shared.CollectInformation{
            BankDetails: sdk.Bool(false),
            BusinessDetails: sdk.Bool(false),
            IndividualDetails: sdk.Bool(false),
            LegalArrangementDetails: sdk.Bool(false),
            PciQuestionnaire: sdk.Bool(false),
            ShareholderDetails: sdk.Bool(false),
        },
        EditMode: sdk.Bool(false),
        MobileOAuthCallbackURL: sdk.String("provident"),
        PlatformName: sdk.String("distinctio"),
        ReturnURL: sdk.String("quibusdam"),
        ShopperLocale: sdk.String("unde"),
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
<!-- End SDK Example Usage -->