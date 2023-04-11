<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAdminAccountRequest,
  AssociateAdminAccountResponse,
  AssociateAdminAccountXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAdminAccountRequest = {
  associateAdminAccountRequest: {
    adminAccount: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AssociateAdminAccountXAmzTargetEnum.AWSFMS20180101AssociateAdminAccount,
};

sdk.associateAdminAccount(req).then((res: AssociateAdminAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->