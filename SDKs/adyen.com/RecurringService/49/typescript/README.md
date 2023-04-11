# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/RecurringService/49/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/RecurringService/49/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreatePermitRequest,
  PostCreatePermitResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreatePermitRequest = {
  merchantAccount: "corrupti",
  permits: [
    {
      partnerId: "distinctio",
      profileReference: "quibusdam",
      restriction: {
        maxAmount: {
          currency: "unde",
          value: 857946,
        },
        singleTransactionLimit: {
          currency: "corrupti",
          value: 847252,
        },
        singleUse: false,
      },
      resultKey: "vel",
      validTillDate: "2021-09-16T11:56:06.019Z",
    },
    {
      partnerId: "suscipit",
      profileReference: "iure",
      restriction: {
        maxAmount: {
          currency: "magnam",
          value: 891773,
        },
        singleTransactionLimit: {
          currency: "ipsa",
          value: 963663,
        },
        singleUse: false,
      },
      resultKey: "tempora",
      validTillDate: "2022-07-10T15:39:12.517Z",
    },
    {
      partnerId: "minus",
      profileReference: "placeat",
      restriction: {
        maxAmount: {
          currency: "voluptatum",
          value: 479977,
        },
        singleTransactionLimit: {
          currency: "excepturi",
          value: 392785,
        },
        singleUse: false,
      },
      resultKey: "recusandae",
      validTillDate: "2022-10-15T05:10:19.629Z",
    },
  ],
  recurringDetailReference: "quis",
  shopperReference: "veritatis",
};

sdk.general.postCreatePermit(req).then((res: PostCreatePermitResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postCreatePermit` - Create new permits linked to a recurring contract.
* `postDisable` - Disable stored payment details
* `postListRecurringDetails` - Get stored payment details
* `postNotifyShopper` - Ask issuer to notify the shopper
* `postScheduleAccountUpdater` - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

