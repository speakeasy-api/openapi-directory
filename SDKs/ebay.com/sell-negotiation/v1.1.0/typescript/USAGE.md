<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FindEligibleItemsRequest, FindEligibleItemsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FindEligibleItemsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    limit: "sit",
    offset: "voluptas",
  },
  headers: {
    xEBAYCMARKETPLACEID: "culpa",
  },
};

sdk.offer.findEligibleItems(req).then((res: FindEligibleItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->