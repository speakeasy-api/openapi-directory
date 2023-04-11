<!-- Start SDK Example Usage -->
```typescript
import {
  GetOrderRequest,
  GetOrderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetOrderRequest = {
  fieldGroups: "corrupti",
  orderId: "provident",
};

sdk.order.getOrder(req).then((res: GetOrderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->