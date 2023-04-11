<!-- Start SDK Example Usage -->
```typescript
import {
  CancelBatchJobExecutionRequest,
  CancelBatchJobExecutionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelBatchJobExecutionRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  applicationId: "illum",
  executionId: "vel",
};

sdk.cancelBatchJobExecution(req).then((res: CancelBatchJobExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->