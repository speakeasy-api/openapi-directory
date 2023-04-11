<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteKeyKeyRequest,
  DeleteKeyKeyResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteKeyKeyRequest = {
  key: "corrupti",
};

sdk.deleteKeyKey(req).then((res: DeleteKeyKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->