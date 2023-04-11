<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateServiceRoleToAccountRequest,
  AssociateServiceRoleToAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateServiceRoleToAccountRequest = {
  requestBody: {
    roleArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.associateServiceRoleToAccount(req).then((res: AssociateServiceRoleToAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->