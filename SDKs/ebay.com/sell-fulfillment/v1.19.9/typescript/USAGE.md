<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetOrderRequest, GetOrderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetOrderRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    orderId: "sit",
  },
  queryParams: {
    fieldGroups: "voluptas",
  },
};

sdk.order.getOrder(req).then((res: GetOrderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->