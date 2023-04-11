# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TestCardService/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TestCardService/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateTestCardRangesRequest,
  PostCreateTestCardRangesResponse
} from "openapi/dist/sdk/models/operations";
import {
  TestCardRangeExpiryMonthEnum,
  TestCardRangeThreeDDirectoryServerResponseEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateTestCardRangesRequest = {
  accountCode: "corrupti",
  accountTypeCode: "provident",
  testCardRanges: [
    {
      address: {
        streetAddress: "quibusdam",
        zip: "unde",
      },
      cardHolderName: "nulla",
      cvc: "corrupti",
      expiryMonth: TestCardRangeExpiryMonthEnum.October,
      expiryYear: 423655,
      rangeEnd: "error",
      rangeStart: "deserunt",
      threeDDirectoryServerResponse: TestCardRangeThreeDDirectoryServerResponseEnum.U,
      threeDPassword: "iure",
      threeDUsername: "magnam",
    },
    {
      address: {
        streetAddress: "debitis",
        zip: "ipsa",
      },
      cardHolderName: "delectus",
      cvc: "tempora",
      expiryMonth: TestCardRangeExpiryMonthEnum.January,
      expiryYear: 477665,
      rangeEnd: "minus",
      rangeStart: "placeat",
      threeDDirectoryServerResponse: TestCardRangeThreeDDirectoryServerResponseEnum.U,
      threeDPassword: "iusto",
      threeDUsername: "excepturi",
    },
    {
      address: {
        streetAddress: "nisi",
        zip: "recusandae",
      },
      cardHolderName: "temporibus",
      cvc: "ab",
      expiryMonth: TestCardRangeExpiryMonthEnum.January,
      expiryYear: 87129,
      rangeEnd: "deserunt",
      rangeStart: "perferendis",
      threeDDirectoryServerResponse: TestCardRangeThreeDDirectoryServerResponseEnum.U,
      threeDPassword: "repellendus",
      threeDUsername: "sapiente",
    },
  ],
};

sdk.general.postCreateTestCardRanges(req).then((res: PostCreateTestCardRangesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postCreateTestCardRanges` - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

