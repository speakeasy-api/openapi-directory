<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteChargeStationRequest, DeleteChargeStationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteChargeStationRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.chargeStations.deleteChargeStation(req).then((res: DeleteChargeStationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->