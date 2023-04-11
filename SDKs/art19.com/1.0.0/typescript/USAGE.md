<!-- Start SDK Example Usage -->
```typescript
import {
  GetClassificationsRequest,
  GetClassificationsResponse,
  GetClassificationsSortEnum,
  GetClassificationsTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetClassificationsRequest = {
  ids: [
    "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    "b7392059-2939-46fe-a759-6eb10faaa235",
  ],
  isCountry: "explicabo",
  pageNumber: 750686,
  pageSize: 315428,
  q: "omnis",
  sort: [
    GetClassificationsSortEnum.CreatedAt,
    GetClassificationsSortEnum.UpdatedAt,
  ],
  type: GetClassificationsTypeEnum.AlternateFeedType,
};

sdk.classification.getClassifications(req).then((res: GetClassificationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->