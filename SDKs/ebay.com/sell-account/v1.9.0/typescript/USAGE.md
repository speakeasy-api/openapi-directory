<!-- Start SDK Example Usage -->
```typescript
import {
  GetAdvertisingEligibilityRequest,
  GetAdvertisingEligibilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAdvertisingEligibilityRequest = {
  xEbayCMarketplaceId: "corrupti",
  programTypes: "provident",
};

sdk.advertisingEligibility.getAdvertisingEligibility(req).then((res: GetAdvertisingEligibilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->