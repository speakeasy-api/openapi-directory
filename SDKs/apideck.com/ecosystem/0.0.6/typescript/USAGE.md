<!-- Start SDK Example Usage -->
```typescript
import {
  CategoriesAllRequest,
  CategoriesAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CategoriesAllRequest = {
  cursor: "corrupti",
  ecosystemId: "provident",
  limit: 715190,
};

sdk.category.categoriesAll(req).then((res: CategoriesAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->