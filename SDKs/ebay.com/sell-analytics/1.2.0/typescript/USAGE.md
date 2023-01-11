<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCustomerServiceMetricRequest, GetCustomerServiceMetricResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCustomerServiceMetricRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    customerServiceMetricType: "sit",
    evaluationType: "voluptas",
  },
  queryParams: {
    evaluationMarketplaceId: "culpa",
  },
};

sdk.customerServiceMetric.getCustomerServiceMetric(req).then((res: GetCustomerServiceMetricResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->