<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCustomerServiceMetricTaskRequest, CreateCustomerServiceMetricTaskResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCustomerServiceMetricTaskRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    acceptLanguage: "sit",
  },
  request: {
    feedType: "voluptas",
    filterCriteria: {
      customerServiceMetricType: "culpa",
      evaluationMarketplaceId: "expedita",
      listingCategories: [
        "dolor",
        "expedita",
        "voluptas",
      ],
      shippingRegions: [
        "et",
      ],
    },
    schemaVersion: "nihil",
  },
};

sdk.customerServiceMetricTask.createCustomerServiceMetricTask(req).then((res: CreateCustomerServiceMetricTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->