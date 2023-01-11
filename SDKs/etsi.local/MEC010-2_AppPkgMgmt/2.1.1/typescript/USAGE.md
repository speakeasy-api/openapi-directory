<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppDgetRequest, AppDgetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppDgetRequest = {
  pathParams: {
    appDId: "sit",
  },
  queryParams: {
    allFields: "voluptas",
    excludeDefault: "culpa",
    excludeFields: "expedita",
    fields: "consequuntur",
    filter: "dolor",
  },
};

sdk.appPkgm.appDget(req).then((res: AppDgetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->