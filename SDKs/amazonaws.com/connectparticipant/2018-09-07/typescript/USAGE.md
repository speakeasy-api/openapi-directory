<!-- Start SDK Example Usage -->
```typescript
import {
  CompleteAttachmentUploadRequest,
  CompleteAttachmentUploadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CompleteAttachmentUploadRequest = {
  requestBody: {
    attachmentIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    clientToken: "unde",
  },
  xAmzAlgorithm: "nulla",
  xAmzBearer: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
};

sdk.completeAttachmentUpload(req).then((res: CompleteAttachmentUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->