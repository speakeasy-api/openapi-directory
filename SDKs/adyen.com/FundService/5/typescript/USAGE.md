<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccountHolderBalanceRequest,
  PostAccountHolderBalanceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AccountHolderBalanceRequest = {
  accountHolderCode: "corrupti",
};

sdk.general.postAccountHolderBalance(req).then((res: PostAccountHolderBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->