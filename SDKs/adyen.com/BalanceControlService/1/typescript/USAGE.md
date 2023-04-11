<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BalanceTransferRequest,
  PostBalanceTransferResponse
} from "openapi/dist/sdk/models/operations";
import {
  BalanceTransferRequestTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BalanceTransferRequest = {
  amount: {
    currency: "corrupti",
    value: 592845,
  },
  description: "distinctio",
  fromMerchant: "quibusdam",
  reference: "unde",
  toMerchant: "nulla",
  type: BalanceTransferRequestTypeEnum.Credit,
};

sdk.general.postBalanceTransfer(req).then((res: PostBalanceTransferResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->