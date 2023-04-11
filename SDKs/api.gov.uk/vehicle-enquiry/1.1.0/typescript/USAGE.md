<!-- Start SDK Example Usage -->
```typescript
import {
  GetVehicleDetailsByRegistrationNumberRequest,
  GetVehicleDetailsByRegistrationNumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetVehicleDetailsByRegistrationNumberRequest = {
  vehicleRequest: {
    registrationNumber: "corrupti",
  },
  xCorrelationId: "provident",
  xApiKey: "distinctio",
};

sdk.vehicle.getVehicleDetailsByRegistrationNumber(req).then((res: GetVehicleDetailsByRegistrationNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->