<!-- Start SDK Example Usage -->
```typescript
import {
  CancelTaskExecutionRequest,
  CancelTaskExecutionResponse,
  CancelTaskExecutionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelTaskExecutionRequest = {
  cancelTaskExecutionRequest: {
    taskExecutionArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CancelTaskExecutionXAmzTargetEnum.FmrsServiceCancelTaskExecution,
};

sdk.cancelTaskExecution(req).then((res: CancelTaskExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->