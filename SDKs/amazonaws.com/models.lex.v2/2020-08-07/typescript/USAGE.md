<!-- Start SDK Example Usage -->
```typescript
import {
  BatchCreateCustomVocabularyItemRequest,
  BatchCreateCustomVocabularyItemResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchCreateCustomVocabularyItemRequest = {
  requestBody: {
    customVocabularyItemList: [
      {
        displayAs: "provident",
        phrase: "distinctio",
        weight: 844266,
      },
      {
        displayAs: "unde",
        phrase: "nulla",
        weight: 544883,
      },
      {
        displayAs: "illum",
        phrase: "vel",
        weight: 623564,
      },
    ],
  },
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
  botId: "tempora",
  botVersion: "suscipit",
  localeId: "molestiae",
};

sdk.batchCreateCustomVocabularyItem(req).then((res: BatchCreateCustomVocabularyItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->