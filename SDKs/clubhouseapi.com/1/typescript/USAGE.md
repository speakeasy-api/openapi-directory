<!-- Start SDK Example Usage -->
```typescript
import {
  GetCheckForUpdateRequest,
  GetCheckForUpdateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCheckForUpdateRequest = {
  isTestflight: 548814,
};

sdk.getCheckForUpdate(req).then((res: GetCheckForUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->