<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiActivityRequest,
  GetApiActivityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiActivityRequest = {
  limit: 10,
  offset: 50,
};

sdk.activity.getApiActivity(req).then((res: GetApiActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->