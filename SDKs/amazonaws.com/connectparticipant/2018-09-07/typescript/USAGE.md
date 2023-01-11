<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CompleteAttachmentUploadRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzBearer: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    attachmentIds: [
      "et",
    ],
    clientToken: "nihil",
  },
};

sdk.completeAttachmentUpload(req).then((res: CompleteAttachmentUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->