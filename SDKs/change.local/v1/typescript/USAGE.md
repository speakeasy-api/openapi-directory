<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiV1DonationsCarbonCalculateRequest, GetApiV1DonationsCarbonCalculateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApiV1DonationsCarbonCalculateRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  queryParams: {
    destinationAddress: 74.099998,
    distanceMi: 53.099998,
    originAddress: 15.100000,
    transportationMethod: "sea",
    weightLb: 77.099998,
  },
};

sdk.getApiV1DonationsCarbonCalculate(req).then((res: GetApiV1DonationsCarbonCalculateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->