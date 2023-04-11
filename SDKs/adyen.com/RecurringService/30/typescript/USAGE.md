<!-- Start SDK Example Usage -->
```typescript
import {
  shared.DisableRequest,
  PostDisableResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.DisableRequest = {
  contract: "corrupti",
  merchantAccount: "provident",
  recurringDetailReference: "distinctio",
  shopperReference: "quibusdam",
};

sdk.general.postDisable(req).then((res: PostDisableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->