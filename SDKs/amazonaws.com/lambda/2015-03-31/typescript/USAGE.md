<!-- Start SDK Example Usage -->
```typescript
import {
  AddLayerVersionPermissionRequest,
  AddLayerVersionPermissionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddLayerVersionPermissionRequest = {
  layerName: "corrupti",
  requestBody: {
    action: "provident",
    organizationId: "distinctio",
    principal: "quibusdam",
    statementId: "unde",
  },
  revisionId: "nulla",
  versionNumber: 544883,
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
};

sdk.addLayerVersionPermission(req).then((res: AddLayerVersionPermissionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->