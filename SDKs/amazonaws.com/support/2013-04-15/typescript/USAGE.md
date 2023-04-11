<!-- Start SDK Example Usage -->
```typescript
import {
  AddAttachmentsToSetRequest,
  AddAttachmentsToSetResponse,
  AddAttachmentsToSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddAttachmentsToSetRequest = {
  addAttachmentsToSetRequest: {
    attachmentSetId: "corrupti",
    attachments: [
      {
        data: "distinctio",
        fileName: "quibusdam",
      },
      {
        data: "unde",
        fileName: "nulla",
      },
      {
        data: "corrupti",
        fileName: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: AddAttachmentsToSetXAmzTargetEnum.AWSSupport20130415AddAttachmentsToSet,
};

sdk.addAttachmentsToSet(req).then((res: AddAttachmentsToSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->