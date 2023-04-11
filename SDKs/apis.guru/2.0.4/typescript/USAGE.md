<!-- Start SDK Example Usage -->
```typescript
import {
  GetMetricsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.apIs.getMetrics().then((res: GetMetricsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->