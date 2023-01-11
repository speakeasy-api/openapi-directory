<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConnectRequest, ConnectResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConnectRequest = {
  request: {
    endpoint: "sit",
  },
};

sdk.connect(req).then((res: ConnectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->