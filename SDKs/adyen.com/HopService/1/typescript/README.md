# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/HopService/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/HopService/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.GetOnboardingUrlRequest,
  PostGetOnboardingUrlResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.GetOnboardingUrlRequest = {
  accountHolderCode: "corrupti",
  collectInformation: {
    bankDetails: false,
    businessDetails: false,
    individualDetails: false,
    legalArrangementDetails: false,
    pciQuestionnaire: false,
    shareholderDetails: false,
  },
  editMode: false,
  mobileOAuthCallbackUrl: "provident",
  platformName: "distinctio",
  returnUrl: "quibusdam",
  shopperLocale: "unde",
  showPages: {
    bankDetailsSummaryPage: false,
    bankVerificationPage: false,
    businessDetailsSummaryPage: false,
    checksOverviewPage: false,
    individualDetailsSummaryPage: false,
    legalArrangementsDetailsSummaryPage: false,
    manualBankAccountPage: false,
    shareholderDetailsSummaryPage: false,
    welcomePage: false,
  },
};

sdk.hostedOnboardingPage.postGetOnboardingUrl(req).then((res: PostGetOnboardingUrlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### hostedOnboardingPage

* `postGetOnboardingUrl` - Get a link to a Adyen-hosted onboarding page

### pciComplianceQuestionnairePage

* `postGetPciQuestionnaireUrl` - Get a link to a PCI compliance questionnaire
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

