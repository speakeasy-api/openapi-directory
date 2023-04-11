<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteResourcePermissionRequest,
  DeleteResourcePermissionResponse,
  DeleteResourcePermissionRequestBodyActionTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteResourcePermissionRequest = {
  requestBody: {
    actionType: DeleteResourcePermissionRequestBodyActionTypeEnum.Restore,
    resourceArn: "corrupti",
    sourceResourceArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.deleteResourcePermission(req).then((res: DeleteResourcePermissionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->