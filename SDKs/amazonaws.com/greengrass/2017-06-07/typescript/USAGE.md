<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateRoleToGroupRequest,
  AssociateRoleToGroupResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateRoleToGroupRequest = {
  groupId: "corrupti",
  requestBody: {
    roleArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.associateRoleToGroup(req).then((res: AssociateRoleToGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->