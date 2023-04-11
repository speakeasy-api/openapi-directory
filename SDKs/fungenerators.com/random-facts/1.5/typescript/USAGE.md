<!-- Start SDK Example Usage -->
```typescript
import {
  GetFactFodRequest,
  GetFactFodResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFactFodRequest = {
  category: "corrupti",
};

sdk.factOfTheDay.getFactFod(req).then((res: GetFactFodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->