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

    req := shared.GetOnboardingURLRequest{
        AccountHolderCode: "corrupti",
        CollectInformation: &shared.CollectInformation{
            BankDetails: false,
            BusinessDetails: false,
            IndividualDetails: false,
            LegalArrangementDetails: false,
            PciQuestionnaire: false,
            ShareholderDetails: false,
        },
        EditMode: false,
        MobileOAuthCallbackURL: "provident",
        PlatformName: "distinctio",
        ReturnURL: "quibusdam",
        ShopperLocale: "unde",
        ShowPages: &shared.ShowPages{
            BankDetailsSummaryPage: false,
            BankVerificationPage: false,
            BusinessDetailsSummaryPage: false,
            ChecksOverviewPage: false,
            IndividualDetailsSummaryPage: false,
            LegalArrangementsDetailsSummaryPage: false,
            ManualBankAccountPage: false,
            ShareholderDetailsSummaryPage: false,
            WelcomePage: false,
        },
    }

    ctx := context.Background()
    res, err := s.HostedOnboardingPage.PostGetOnboardingURL(ctx, req, operations.PostGetOnboardingURLSecurity{
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