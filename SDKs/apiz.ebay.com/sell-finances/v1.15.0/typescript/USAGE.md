<!-- Start SDK Example Usage -->
```typescript
import {
  GetPayoutRequest,
  GetPayoutResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetPayoutRequest = {
  xEbayCMarketplaceId: "corrupti",
  payoutId: "provident",
};

sdk.payout.getPayout(req).then((res: GetPayoutResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->