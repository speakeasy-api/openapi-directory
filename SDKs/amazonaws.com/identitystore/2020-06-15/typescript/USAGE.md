<!-- Start SDK Example Usage -->
```typescript
import {
  CreateGroupRequest,
  CreateGroupResponse,
  CreateGroupXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateGroupRequest = {
  createGroupRequest: {
    description: "corrupti",
    displayName: "provident",
    identityStoreId: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: CreateGroupXAmzTargetEnum.AWSIdentityStoreCreateGroup,
};

sdk.createGroup(req).then((res: CreateGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->