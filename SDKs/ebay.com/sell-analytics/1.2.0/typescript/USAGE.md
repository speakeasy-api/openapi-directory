<!-- Start SDK Example Usage -->
```typescript
import {
  GetCustomerServiceMetricRequest,
  GetCustomerServiceMetricResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCustomerServiceMetricRequest = {
  customerServiceMetricType: "corrupti",
  evaluationMarketplaceId: "provident",
  evaluationType: "distinctio",
};

sdk.customerServiceMetric.getCustomerServiceMetric(req).then((res: GetCustomerServiceMetricResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->