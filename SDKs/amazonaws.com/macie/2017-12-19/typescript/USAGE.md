<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateMemberAccountRequest,
  AssociateMemberAccountResponse,
  AssociateMemberAccountXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateMemberAccountRequest = {
  associateMemberAccountRequest: {
    memberAccountId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AssociateMemberAccountXAmzTargetEnum.MacieServiceAssociateMemberAccount,
};

sdk.associateMemberAccount(req).then((res: AssociateMemberAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->