<!-- Start SDK Example Usage -->
```typescript
import {
  AccountCreateRequestBody,
  AccountCreateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccountCreateRequestBody = {
  email: "Larue_Rau85@yahoo.com",
  name: "corrupti",
  password: "illum",
};

sdk.account.accountCreate(req).then((res: AccountCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->