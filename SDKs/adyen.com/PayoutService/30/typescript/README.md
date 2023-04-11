# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/PayoutService/30/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/PayoutService/30/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.StoreDetailRequest,
  PostStoreDetailResponse
} from "openapi/dist/sdk/models/operations";
import {
  StoreDetailRequestEntityTypeEnum,
  RecurringContractEnum,
  RecurringTokenServiceEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.StoreDetailRequest = {
  additionalData: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  bank: {
    bankAccountNumber: "illum",
    bankCity: "vel",
    bankLocationId: "error",
    bankName: "deserunt",
    bic: "suscipit",
    countryCode: "iure",
    iban: "magnam",
    ownerName: "debitis",
    taxId: "ipsa",
  },
  billingAddress: {
    city: "Edinburg",
    country: "Holy See (Vatican City State)",
    houseNumberOrName: "molestiae",
    postalCode: "85453-9803",
    stateOrProvince: "veritatis",
    street: "0389 Connelly Trace",
  },
  card: {
    cvc: "at",
    expiryMonth: "maiores",
    expiryYear: "molestiae",
    holderName: "quod",
    issueNumber: "quod",
    number: "esse",
    startMonth: "totam",
    startYear: "porro",
  },
  dateOfBirth: "2022-10-06T15:49:54.663Z",
  entityType: StoreDetailRequestEntityTypeEnum.Company,
  fraudOffset: 639921,
  merchantAccount: "occaecati",
  nationality: "fugit",
  recurring: {
    contract: RecurringContractEnum.Recurring,
    recurringDetailName: "hic",
    tokenService: RecurringTokenServiceEnum.Mctokenservice,
  },
  selectedBrand: "totam",
  shopperEmail: "beatae",
  shopperName: {
    firstName: "Haskell",
    lastName: "Krajcik",
  },
  shopperReference: "modi",
  socialSecurityNumber: "qui",
};

sdk.initialization.postStoreDetail(req).then((res: PostStoreDetailResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### initialization

* `postStoreDetail` - Store payout details
* `postStoreDetailAndSubmitThirdParty` - Store details and submit a payout
* `postSubmitThirdParty` - Submit a payout

### instantPayouts

* `postPayout` - Make an instant card payout

### reviewing

* `postConfirmThirdParty` - Confirm a payout
* `postDeclineThirdParty` - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

