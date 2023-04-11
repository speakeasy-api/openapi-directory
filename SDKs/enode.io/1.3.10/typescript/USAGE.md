<!-- Start SDK Example Usage -->
```typescript
import {
  ControlChargerChargingRequest,
  ControlChargerChargingResponse,
  ControlChargerChargingRequestBodyActionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ControlChargerChargingRequest = {
  requestBody: {
    action: ControlChargerChargingRequestBodyActionEnum.Start,
  },
  chargerId: "corrupti",
};

sdk.chargers.controlChargerCharging(req).then((res: ControlChargerChargingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->