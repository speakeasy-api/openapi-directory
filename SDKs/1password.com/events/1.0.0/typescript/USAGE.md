<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  GetItemUsagesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = {
  endTime: "2020-06-11T16:32:50-03:00",
  limit: 5928.45,
  startTime: "2020-06-11T16:32:50-03:00",
};

sdk.apiV1.getItemUsages(req).then((res: GetItemUsagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->