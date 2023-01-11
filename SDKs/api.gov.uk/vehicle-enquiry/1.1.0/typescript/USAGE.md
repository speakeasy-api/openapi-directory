<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVehicleDetailsByRegistrationNumberRequest, GetVehicleDetailsByRegistrationNumberResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVehicleDetailsByRegistrationNumberRequest = {
  headers: {
    xCorrelationId: "sit",
    xApiKey: "voluptas",
  },
  request: {
    registrationNumber: "culpa",
  },
};

sdk.vehicle.getVehicleDetailsByRegistrationNumber(req).then((res: GetVehicleDetailsByRegistrationNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->