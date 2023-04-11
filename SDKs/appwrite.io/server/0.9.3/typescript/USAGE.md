<!-- Start SDK Example Usage -->
```typescript
import {
  AccountCreateRecoveryRequestBody,
  AccountCreateRecoveryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccountCreateRecoveryRequestBody = {
  email: "Larue_Rau85@yahoo.com",
  url: "corrupti",
};

sdk.account.accountCreateRecovery(req).then((res: AccountCreateRecoveryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->