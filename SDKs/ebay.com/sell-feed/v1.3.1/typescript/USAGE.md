<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCustomerServiceMetricTaskRequest,
  CreateCustomerServiceMetricTaskResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCustomerServiceMetricTaskRequest = {
  createServiceMetricsTaskRequest: {
    feedType: "corrupti",
    filterCriteria: {
      customerServiceMetricType: "provident",
      evaluationMarketplaceId: "distinctio",
      listingCategories: [
        "unde",
        "nulla",
        "corrupti",
        "illum",
      ],
      shippingRegions: [
        "error",
        "deserunt",
      ],
    },
    schemaVersion: "suscipit",
  },
  acceptLanguage: "iure",
};

sdk.customerServiceMetricTask.createCustomerServiceMetricTask(req).then((res: CreateCustomerServiceMetricTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->