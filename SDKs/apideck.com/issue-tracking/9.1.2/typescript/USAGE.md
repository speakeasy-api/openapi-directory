<!-- Start SDK Example Usage -->
```typescript
import {
  CollectionsAllRequest,
  CollectionsAllResponse
} from "openapi/dist/sdk/models/operations";
import {
  CollectionsSortByEnum,
  SortDirectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CollectionsAllRequest = {
  cursor: "corrupti",
  fields: "provident",
  limit: 715190,
  raw: false,
  sort: {
    by: CollectionsSortByEnum.Name,
    direction: SortDirectionEnum.Desc,
  },
  xApideckAppId: "unde",
  xApideckConsumerId: "nulla",
  xApideckServiceId: "corrupti",
};

sdk.collections.collectionsAll(req).then((res: CollectionsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->