<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConfigConfigGetRequest, ConfigConfigGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConfigConfigGetRequest = {
  headers: {
    authorization: "sit",
  },
};

sdk.configConfigGet(req).then((res: ConfigConfigGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->