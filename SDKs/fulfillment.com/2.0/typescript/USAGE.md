<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountingRequest,
  GetAccountingResponse,
  GetAccountingHydrateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountingRequest = {
  fromDate: "corrupti",
  hydrate: [
    GetAccountingHydrateEnum.Items,
    GetAccountingHydrateEnum.Items,
    GetAccountingHydrateEnum.Items,
  ],
  limit: 715190,
  orderIds: [
    602763,
    857946,
    544883,
    847252,
  ],
  page: 423655,
  toDate: "error",
  warehouseIds: [
    384382,
    437587,
    297534,
  ],
};

sdk.accounting.getAccounting(req).then((res: GetAccountingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->