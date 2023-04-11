<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAttachmentForObjectRequest,
  CreateAttachmentForObjectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AttachmentRequestResourceSubtypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreateAttachmentForObjectRequest = {
  attachmentRequest: {
    connectToApp: false,
    file: {
      content: "corrupti".encode(),
      file: "provident",
    },
    name: "distinctio",
    parent: "quibusdam",
    resourceSubtype: AttachmentRequestResourceSubtypeEnum.External,
    url: "unde",
  },
  optFields: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  optPretty: false,
};

sdk.attachments.createAttachmentForObject(req).then((res: CreateAttachmentForObjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->