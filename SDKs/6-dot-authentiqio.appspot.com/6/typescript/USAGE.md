<!-- Start SDK Example Usage -->
```typescript
import {
  KeyRevokeRequest,
  KeyRevokeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KeyRevokeRequest = {
  pk: "corrupti",
  secret: "provident",
};

sdk.delete.keyRevoke(req).then((res: KeyRevokeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->