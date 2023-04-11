<!-- Start SDK Example Usage -->
```typescript
import {
  BatchDeleteWorldsRequest,
  BatchDeleteWorldsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchDeleteWorldsRequest = {
  requestBody: {
    worlds: [
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
};

sdk.batchDeleteWorlds(req).then((res: BatchDeleteWorldsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->