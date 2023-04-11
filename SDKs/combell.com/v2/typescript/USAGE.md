<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateAccount,
  CreateAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateAccount = {
  ftpPassword: "corrupti",
  identifier: "provident",
  servicepackId: 715190,
};

sdk.accounts.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->