<!-- Start SDK Example Usage -->
```typescript
import {
  AbortMultipartUploadRequest,
  AbortMultipartUploadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AbortMultipartUploadRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  accountId: "illum",
  uploadId: "vel",
  vaultName: "error",
};

sdk.abortMultipartUpload(req).then((res: AbortMultipartUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->