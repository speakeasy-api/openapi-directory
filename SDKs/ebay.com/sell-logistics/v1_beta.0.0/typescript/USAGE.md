<!-- Start SDK Example Usage -->
```typescript
import {
  CancelShipmentRequest,
  CancelShipmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CancelShipmentRequest = {
  shipmentId: "corrupti",
};

sdk.shipment.cancelShipment(req).then((res: CancelShipmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->