<!-- Start SDK Example Usage -->
```typescript
import {
  shared.PreSignRequest,
  PostRmmPreSignAttachmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.PreSignRequest = {
  fileExtension: "pdf",
  mediaType: "application/pdf",
};

sdk.attachments.postRmmPreSignAttachment(req).then((res: PostRmmPreSignAttachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->