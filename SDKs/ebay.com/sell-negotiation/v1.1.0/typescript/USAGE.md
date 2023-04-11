<!-- Start SDK Example Usage -->
```typescript
import {
  FindEligibleItemsRequest,
  FindEligibleItemsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindEligibleItemsRequest = {
  xEbayCMarketplaceId: "corrupti",
  limit: "provident",
  offset: "distinctio",
};

sdk.offer.findEligibleItems(req).then((res: FindEligibleItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->