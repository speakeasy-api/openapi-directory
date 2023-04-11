<!-- Start SDK Example Usage -->
```typescript
import {
  GetRateLimitsRequest,
  GetRateLimitsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRateLimitsRequest = {
  apiContext: "corrupti",
  apiName: "provident",
};

sdk.rateLimit.getRateLimits(req).then((res: GetRateLimitsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->