<!-- Start SDK Example Usage -->
```typescript
import {
  AcknowledgeJobRequest,
  AcknowledgeJobResponse,
  AcknowledgeJobXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcknowledgeJobRequest = {
  acknowledgeJobInput: {
    jobId: "corrupti",
    nonce: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AcknowledgeJobXAmzTargetEnum.CodePipeline20150709AcknowledgeJob,
};

sdk.acknowledgeJob(req).then((res: AcknowledgeJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->