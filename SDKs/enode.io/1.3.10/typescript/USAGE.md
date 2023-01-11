<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ControlChargerChargingRequest, ControlChargerChargingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ControlChargerChargingRequest = {
  security: {
    userAccessToken: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    chargerId: "sit",
  },
  request: {
    action: "START",
  },
};

sdk.chargers.controlChargerCharging(req).then((res: ControlChargerChargingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->