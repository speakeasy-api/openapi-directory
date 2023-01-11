<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVehicleSeenVehicleSeenGetRequest, GetVehicleSeenVehicleSeenGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVehicleSeenVehicleSeenGetRequest = {
  queryParams: {
    afterDate: "2006-05-01",
    jwt: "culpa",
    vin: "expedita",
  },
};

sdk.applicationAcceleration.getVehicleSeenVehicleSeenGet(req).then((res: GetVehicleSeenVehicleSeenGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->