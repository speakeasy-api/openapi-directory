<!-- Start SDK Example Usage -->
```typescript
import {
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageResponse,
  BatchDetectDominantLanguageXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchDetectDominantLanguageRequest = {
  batchDetectDominantLanguageRequest: {
    textList: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: BatchDetectDominantLanguageXAmzTargetEnum.Comprehend20171127BatchDetectDominantLanguage,
};

sdk.batchDetectDominantLanguage(req).then((res: BatchDetectDominantLanguageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->