<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRateLimitsRequest, GetRateLimitsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRateLimitsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    apiContext: "sit",
    apiName: "voluptas",
  },
};

sdk.rateLimit.getRateLimits(req).then((res: GetRateLimitsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->