<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CrmCheckRequest, CrmCheckResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CrmCheckRequest = {
  pathParams: {
    vin: "sit",
  },
  queryParams: {
    apiKey: "voluptas",
    saleDate: "culpa",
  },
};

sdk.crmCleanseAPI.crmCheck(req).then((res: CrmCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->