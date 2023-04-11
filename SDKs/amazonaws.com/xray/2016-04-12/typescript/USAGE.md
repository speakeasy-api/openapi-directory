<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetTracesRequest,
  BatchGetTracesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetTracesRequest = {
  nextToken: "corrupti",
  requestBody: {
    nextToken: "provident",
    traceIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
};

sdk.batchGetTraces(req).then((res: BatchGetTracesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->