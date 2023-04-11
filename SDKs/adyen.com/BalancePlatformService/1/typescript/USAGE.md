<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountHoldersIdRequest,
  GetAccountHoldersIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountHoldersIdRequest = {
  id: "corrupti",
};

sdk.accountHolders.getAccountHoldersId(req).then((res: GetAccountHoldersIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->