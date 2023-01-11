<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1Request, GetV1Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1Request = {
  queryParams: {
    apiKey: "sit",
    fields: "voluptas",
    ipAddress: "culpa",
  },
};

sdk.getV1(req).then((res: GetV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->