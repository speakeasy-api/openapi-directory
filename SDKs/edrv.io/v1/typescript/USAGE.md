<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteChargeStationRequest,
  DeleteChargeStationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteChargeStationRequest = {
  id: "corrupti",
};

sdk.chargeStations.deleteChargeStation(req).then((res: DeleteChargeStationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->