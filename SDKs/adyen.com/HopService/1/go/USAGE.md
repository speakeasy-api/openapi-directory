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

    req := operations.PostGetOnboardingURLRequest{
        Security: operations.PostGetOnboardingURLSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.GetOnboardingURLRequest{
            AccountHolderCode: "unde",
            CollectInformation: &shared.CollectInformation{
                BankDetails: false,
                BusinessDetails: false,
                IndividualDetails: false,
                LegalArrangementDetails: false,
                PciQuestionnaire: false,
                ShareholderDetails: false,
            },
            EditMode: false,
            PlatformName: "deserunt",
            ReturnURL: "porro",
            ShopperLocale: "nulla",
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
        },
    }

    ctx := context.Background()
    res, err := s.HostedOnboardingPage.PostGetOnboardingURL(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOnboardingURLResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->