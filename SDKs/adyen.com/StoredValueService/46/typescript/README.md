# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/StoredValueService/46/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/StoredValueService/46/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.StoredValueStatusChangeRequest,
  PostChangeStatusResponse
} from "openapi/dist/sdk/models/operations";
import {
  StoredValueStatusChangeRequestShopperInteractionEnum,
  StoredValueStatusChangeRequestStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.StoredValueStatusChangeRequest = {
  amount: {
    currency: "corrupti",
    value: 592845,
  },
  merchantAccount: "distinctio",
  paymentMethod: {
    "unde": "nulla",
    "corrupti": "illum",
    "vel": "error",
    "deserunt": "suscipit",
  },
  recurringDetailReference: "iure",
  reference: "magnam",
  shopperInteraction: StoredValueStatusChangeRequestShopperInteractionEnum.Pos,
  shopperReference: "ipsa",
  status: StoredValueStatusChangeRequestStatusEnum.Inactive,
  store: "tempora",
};

sdk.general.postChangeStatus(req).then((res: PostChangeStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postChangeStatus` - Changes the status of the payment method.
* `postCheckBalance` - Checks the balance.
* `postIssue` - Issues a new card.
* `postLoad` - Loads the payment method.
* `postMergeBalance` - Merge the balance of two cards.
* `postVoidTransaction` - Voids a transaction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

