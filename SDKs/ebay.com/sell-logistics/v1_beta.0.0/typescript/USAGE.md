<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelShipmentRequest, CancelShipmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CancelShipmentRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    shipmentId: "sit",
  },
};

sdk.shipment.cancelShipment(req).then((res: CancelShipmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->