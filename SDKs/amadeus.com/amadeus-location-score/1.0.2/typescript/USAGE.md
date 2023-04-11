<!-- Start SDK Example Usage -->
```typescript
import {
  GetCategoryRatedAreasRequest,
  GetCategoryRatedAreasResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCategoryRatedAreasRequest = {
  latitude: 5488.14,
  longitude: 5928.45,
};

sdk.categoryRatedAreas.getCategoryRatedAreas(req).then((res: GetCategoryRatedAreasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->