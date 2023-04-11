# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/savingsplans/2019-06-28/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/savingsplans/2019-06-28/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSavingsPlanRequest,
  CreateSavingsPlanResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSavingsPlanRequest = {
  requestBody: {
    clientToken: "corrupti",
    commitment: "provident",
    purchaseTime: "2021-04-24T16:27:50.833Z",
    savingsPlanOfferingId: "unde",
    tags: {
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
    },
    upfrontPaymentAmount: "debitis",
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
};

sdk.createSavingsPlan(req).then((res: CreateSavingsPlanResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createSavingsPlan` - Creates a Savings Plan.
* `deleteQueuedSavingsPlan` - Deletes the queued purchase for the specified Savings Plan.
* `describeSavingsPlanRates` - Describes the specified Savings Plans rates.
* `describeSavingsPlans` - Describes the specified Savings Plans.
* `describeSavingsPlansOfferingRates` - Describes the specified Savings Plans offering rates.
* `describeSavingsPlansOfferings` - Describes the specified Savings Plans offerings.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

