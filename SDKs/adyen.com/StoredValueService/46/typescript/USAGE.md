<!-- Start SDK Example Usage -->
```typescript
import {
  shared.StoredValueStatusChangeRequest,
  PostChangeStatusResponse
} from "openapi/dist/sdk/models/operations";
import {
  StoredValueStatusChangeRequestShopperInteractionEnum,
  StoredValueStatusChangeRequestStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.StoredValueStatusChangeRequest = {
  amount: {
    currency: "corrupti",
    value: 592845,
  },
  merchantAccount: "distinctio",
  paymentMethod: {
    "unde": "nulla",
    "corrupti": "illum",
    "vel": "error",
    "deserunt": "suscipit",
  },
  recurringDetailReference: "iure",
  reference: "magnam",
  shopperInteraction: StoredValueStatusChangeRequestShopperInteractionEnum.Pos,
  shopperReference: "ipsa",
  status: StoredValueStatusChangeRequestStatusEnum.Inactive,
  store: "tempora",
};

sdk.general.postChangeStatus(req).then((res: PostChangeStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->