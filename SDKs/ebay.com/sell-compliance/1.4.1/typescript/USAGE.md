<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetListingViolationsRequest, GetListingViolationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetListingViolationsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    complianceType: "sit",
    filter: "voluptas",
    limit: "culpa",
    listingId: "expedita",
    offset: "consequuntur",
  },
  headers: {
    xEBAYCMARKETPLACEID: "dolor",
  },
};

sdk.listingViolation.getListingViolations(req).then((res: GetListingViolationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->