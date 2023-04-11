<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiV1DonationsCarbonCalculateRequest,
  GetApiV1DonationsCarbonCalculateResponse,
  GetApiV1DonationsCarbonCalculateTransportationMethodEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiV1DonationsCarbonCalculateRequest = {
  destinationAddress: 5488.14,
  distanceMi: 5928.45,
  originAddress: 7151.9,
  transportationMethod: GetApiV1DonationsCarbonCalculateTransportationMethodEnum.Sea,
  weightLb: 6027.63,
};

sdk.getApiV1DonationsCarbonCalculate(req).then((res: GetApiV1DonationsCarbonCalculateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->