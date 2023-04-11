<!-- Start SDK Example Usage -->
```typescript
import {
  GsiDispatchRequest,
  GsiDispatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GsiDispatchRequest = {
  key: "corrupti",
  zip: "provident",
};

sdk.dispatchGreenEnergyDistributionAPI.gsiDispatch(req).then((res: GsiDispatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->