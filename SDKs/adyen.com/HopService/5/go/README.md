# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/HopService/5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### HostedOnboardingPage

* `PostGetOnboardingURL` - Get a link to a Adyen-hosted onboarding page

### PCIComplianceQuestionnairePage

* `PostGetPciQuestionnaireURL` - Get a link to a PCI compliance questionnaire
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
