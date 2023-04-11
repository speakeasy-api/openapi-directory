<!-- Start SDK Example Usage -->
```typescript
import {
  GetListingViolationsRequest,
  GetListingViolationsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetListingViolationsRequest = {
  xEbayCMarketplaceId: "corrupti",
  complianceType: "provident",
  filter: "distinctio",
  limit: "quibusdam",
  listingId: "unde",
  offset: "nulla",
};

sdk.listingViolation.getListingViolations(req).then((res: GetListingViolationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->