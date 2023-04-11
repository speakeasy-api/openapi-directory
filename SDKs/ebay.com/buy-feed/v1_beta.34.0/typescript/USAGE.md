<!-- Start SDK Example Usage -->
```typescript
import {
  GetItemFeedRequest,
  GetItemFeedResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetItemFeedRequest = {
  accept: "corrupti",
  range: "provident",
  xEbayCMarketplaceId: "distinctio",
  categoryId: "quibusdam",
  date: "unde",
  feedScope: "nulla",
};

sdk.item.getItemFeed(req).then((res: GetItemFeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->