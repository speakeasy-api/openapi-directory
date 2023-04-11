<!-- Start SDK Example Usage -->
```typescript
import {
  GetProductRequest,
  GetProductResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetProductRequest = {
  xEbayCMarketplaceId: "corrupti",
  epid: "provident",
};

sdk.product.getProduct(req).then((res: GetProductResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->