<!-- Start SDK Example Usage -->
```typescript
import {
  AddPaymentMethodRequest,
  AddPaymentMethodResponse
} from "openapi/dist/sdk/models/operations";
import {
  FeatureFlagsEnum,
  AddPaymentMethodRequestTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddPaymentMethodRequest = {
  addPaymentMethodRequest: {
    makeDefault: false,
    token: "corrupti",
    type: AddPaymentMethodRequestTypeEnum.Card,
  },
  ff: [
    FeatureFlagsEnum.Cas,
    FeatureFlagsEnum.Lrl,
    FeatureFlagsEnum.Rpt,
  ],
  lang: "nulla",
};

sdk.account.addPaymentMethod(req).then((res: AddPaymentMethodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->