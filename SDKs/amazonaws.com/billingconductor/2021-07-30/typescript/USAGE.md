<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAccountsRequest,
  AssociateAccountsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAccountsRequest = {
  requestBody: {
    accountIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    arn: "unde",
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.associateAccounts(req).then((res: AssociateAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->