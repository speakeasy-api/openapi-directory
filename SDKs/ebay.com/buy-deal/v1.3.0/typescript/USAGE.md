<!-- Start SDK Example Usage -->
```typescript
import {
  GetDealItemsRequest,
  GetDealItemsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetDealItemsRequest = {
  xEbayCMarketplaceId: "corrupti",
  categoryIds: "provident",
  commissionable: "distinctio",
  deliveryCountry: "quibusdam",
  limit: "unde",
  offset: "nulla",
};

sdk.dealItem.getDealItems(req).then((res: GetDealItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->