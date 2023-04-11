<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CloseAccountHolderRequest,
  PostCloseAccountHolderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CloseAccountHolderRequest = {
  accountHolderCode: "corrupti",
};

sdk.accountHolders.postCloseAccountHolder(req).then((res: PostCloseAccountHolderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->