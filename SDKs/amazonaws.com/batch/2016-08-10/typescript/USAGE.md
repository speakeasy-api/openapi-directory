<!-- Start SDK Example Usage -->
```typescript
import {
  CancelJobRequest,
  CancelJobResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelJobRequest = {
  requestBody: {
    jobId: "corrupti",
    reason: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.cancelJob(req).then((res: CancelJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->