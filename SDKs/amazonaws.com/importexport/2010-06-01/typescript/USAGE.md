<!-- Start SDK Example Usage -->
```typescript
import {
  GETCancelJobRequest,
  GETCancelJobResponse,
  GETCancelJobActionEnum,
  GETCancelJobOperationEnum,
  GETCancelJobVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETCancelJobRequest = {
  apiVersion: "corrupti",
  awsAccessKeyId: "provident",
  action: GETCancelJobActionEnum.CancelJob,
  jobId: "distinctio",
  operation: GETCancelJobOperationEnum.CancelJob,
  signature: "quibusdam",
  signatureMethod: "unde",
  signatureVersion: "nulla",
  timestamp: "corrupti",
  version: GETCancelJobVersionEnum.TwoThousandAndTen0601,
};

sdk.getCancelJob(req).then((res: GETCancelJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->