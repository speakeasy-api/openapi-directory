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