<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAddonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.addon.deleteAddon().then((res: DeleteAddonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->