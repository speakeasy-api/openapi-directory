<!-- Start SDK Example Usage -->
```typescript
import {
  BatchEvaluateFeatureRequest,
  BatchEvaluateFeatureResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchEvaluateFeatureRequest = {
  requestBody: {
    requests: [
      {
        entityId: "provident",
        evaluationContext: "distinctio",
        feature: "quibusdam",
      },
      {
        entityId: "unde",
        evaluationContext: "nulla",
        feature: "corrupti",
      },
      {
        entityId: "illum",
        evaluationContext: "vel",
        feature: "error",
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
  project: "tempora",
};

sdk.batchEvaluateFeature(req).then((res: BatchEvaluateFeatureResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->