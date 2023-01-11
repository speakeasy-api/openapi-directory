<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetWaybackV1AvailableRequest, GetWaybackV1AvailableResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetWaybackV1AvailableRequest = {
  queryParams: {
    callback: "sit",
    closest: "either",
    statusCode: 6050128673802995827,
    tag: "expedita",
    timeout: 15.100000,
    timestamp: "expedita",
    url: "voluptas",
  },
};

sdk.getWaybackV1Available(req).then((res: GetWaybackV1AvailableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->