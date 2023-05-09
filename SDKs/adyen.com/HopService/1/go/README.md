# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/HopService/1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [HostedOnboardingPage](docs/hostedonboardingpage/README.md)

* [PostGetOnboardingURL](docs/hostedonboardingpage/README.md#postgetonboardingurl) - Get a link to a Adyen-hosted onboarding page

### [PCIComplianceQuestionnairePage](docs/pcicompliancequestionnairepage/README.md)

* [PostGetPciQuestionnaireURL](docs/pcicompliancequestionnairepage/README.md#postgetpciquestionnaireurl) - Get a link to a PCI compliance questionnaire
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
