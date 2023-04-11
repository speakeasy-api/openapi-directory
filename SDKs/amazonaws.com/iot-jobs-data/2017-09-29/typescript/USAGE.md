<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeJobExecutionRequest,
  DescribeJobExecutionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeJobExecutionRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  executionNumber: 847252,
  includeJobDocument: false,
  jobId: "vel",
  thingName: "error",
};

sdk.describeJobExecution(req).then((res: DescribeJobExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->