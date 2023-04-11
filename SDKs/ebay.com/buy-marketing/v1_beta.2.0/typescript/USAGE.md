<!-- Start SDK Example Usage -->
```typescript
import {
  GetMerchandisedProductsRequest,
  GetMerchandisedProductsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetMerchandisedProductsRequest = {
  aspectFilter: "corrupti",
  categoryId: "provident",
  limit: "distinctio",
  metricName: "quibusdam",
};

sdk.merchandisedProduct.getMerchandisedProducts(req).then((res: GetMerchandisedProductsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->