<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetPayoutRequest, GetPayoutResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetPayoutRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    payoutId: "sit",
  },
};

sdk.payout.getPayout(req).then((res: GetPayoutResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->