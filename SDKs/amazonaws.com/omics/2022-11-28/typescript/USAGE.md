<!-- Start SDK Example Usage -->
```typescript
import {
  BatchDeleteReadSetRequest,
  BatchDeleteReadSetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchDeleteReadSetRequest = {
  requestBody: {
    ids: [
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
  sequenceStoreId: "suscipit",
};

sdk.batchDeleteReadSet(req).then((res: BatchDeleteReadSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->