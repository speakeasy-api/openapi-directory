<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAlertManagerDefinitionRequest,
  CreateAlertManagerDefinitionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAlertManagerDefinitionRequest = {
  requestBody: {
    clientToken: "corrupti",
    data: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  workspaceId: "error",
};

sdk.createAlertManagerDefinition(req).then((res: CreateAlertManagerDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->