<!-- Start SDK Example Usage -->
```typescript
import {
  BalanceLookupRequest,
  BalanceLookupResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BalanceLookupRequest = {
  apiKey: "corrupti",
};

sdk.balance.balanceLookup(req).then((res: BalanceLookupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->