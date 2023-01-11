<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BalanceLookupRequest, BalanceLookupResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BalanceLookupRequest = {
  queryParams: {
    apiKey: "sit",
  },
};

sdk.balance.balanceLookup(req).then((res: BalanceLookupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->