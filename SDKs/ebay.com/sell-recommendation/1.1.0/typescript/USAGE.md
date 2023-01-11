<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FindListingRecommendationsRequest, FindListingRecommendationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FindListingRecommendationsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    filter: "sit",
    limit: "voluptas",
    offset: "culpa",
  },
  headers: {
    xEBAYCMARKETPLACEID: "expedita",
  },
  request: {
    listingIds: [
      "dolor",
      "expedita",
      "voluptas",
    ],
  },
};

sdk.listingRecommendation.findListingRecommendations(req).then((res: FindListingRecommendationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->