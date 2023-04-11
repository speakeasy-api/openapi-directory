<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetFieldRequest,
  BatchGetFieldResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetFieldRequest = {
  requestBody: {
    fields: [
      {
        id: "provident",
      },
      {
        id: "distinctio",
      },
      {
        id: "quibusdam",
      },
    ],
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  domainId: "suscipit",
};

sdk.batchGetField(req).then((res: BatchGetFieldResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->