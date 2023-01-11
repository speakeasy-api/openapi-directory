<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCheckForUpdateRequest, GetCheckForUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCheckForUpdateRequest = {
  queryParams: {
    isTestflight: 8717895732742165505,
  },
};

sdk.getCheckForUpdate(req).then((res: GetCheckForUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->