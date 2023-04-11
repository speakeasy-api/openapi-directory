<!-- Start SDK Example Usage -->
```typescript
import {
  FindListingRecommendationsRequest,
  FindListingRecommendationsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindListingRecommendationsRequest = {
  findListingRecommendationRequest: {
    listingIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  xEbayCMarketplaceId: "unde",
  filter: "nulla",
  limit: "corrupti",
  offset: "illum",
};

sdk.listingRecommendation.findListingRecommendations(req).then((res: FindListingRecommendationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->