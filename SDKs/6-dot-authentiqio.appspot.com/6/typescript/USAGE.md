<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { KeyRevokeRequest, KeyRevokeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: KeyRevokeRequest = {
  pathParams: {
    pk: "sit",
  },
  queryParams: {
    secret: "voluptas",
  },
};

sdk.delete.keyRevoke(req).then((res: KeyRevokeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->