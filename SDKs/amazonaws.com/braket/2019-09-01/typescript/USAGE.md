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
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  jobArn: "illum",
};

sdk.cancelJob(req).then((res: CancelJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->