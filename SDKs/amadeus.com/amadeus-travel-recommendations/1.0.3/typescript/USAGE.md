<!-- Start SDK Example Usage -->
```typescript
import {
  GetRecommendedLocationRequest,
  GetRecommendedLocationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRecommendedLocationRequest = {
  cityCodes: "corrupti",
  destinationCountryCodes: "provident",
  travelerCountryCode: "distinctio",
};

sdk.recommendedLocations.getRecommendedLocation(req).then((res: GetRecommendedLocationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->