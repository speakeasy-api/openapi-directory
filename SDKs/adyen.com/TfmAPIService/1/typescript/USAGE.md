<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AssignTerminalsRequest,
  PostAssignTerminalsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AssignTerminalsRequest = {
  companyAccount: "corrupti",
  merchantAccount: "provident",
  merchantInventory: false,
  store: "distinctio",
  terminals: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
};

sdk.general.postAssignTerminals(req).then((res: PostAssignTerminalsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->