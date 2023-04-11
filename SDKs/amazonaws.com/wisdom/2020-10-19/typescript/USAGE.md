<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAssistantRequest,
  CreateAssistantResponse,
  CreateAssistantRequestBodyTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAssistantRequest = {
  requestBody: {
    clientToken: "corrupti",
    description: "provident",
    name: "distinctio",
    serverSideEncryptionConfiguration: {
      kmsKeyId: "quibusdam",
    },
    tags: {
      "nulla": "corrupti",
      "illum": "vel",
      "error": "deserunt",
    },
    type: CreateAssistantRequestBodyTypeEnum.Agent,
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
};

sdk.createAssistant(req).then((res: CreateAssistantResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->