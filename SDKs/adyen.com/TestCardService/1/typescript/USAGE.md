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