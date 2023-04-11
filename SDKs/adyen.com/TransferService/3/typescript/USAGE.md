<!-- Start SDK Example Usage -->
```typescript
import {
  GetTransactionsRequest,
  GetTransactionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetTransactionsRequest = {
  accountHolderId: "corrupti",
  balanceAccountId: "provident",
  balancePlatform: "distinctio",
  createdSince: "2021-03-11T23:22:42.658Z",
  createdUntil: "2021-05-14T08:28:11.899Z",
  cursor: "illum",
  limit: 423655,
  paymentInstrumentId: "error",
};

sdk.transactions.getTransactions(req).then((res: GetTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->