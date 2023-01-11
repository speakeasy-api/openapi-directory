<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteKeyKeyRequest, DeleteKeyKeyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteKeyKeyRequest = {
  pathParams: {
    key: "sit",
  },
};

sdk.deleteKeyKey(req).then((res: DeleteKeyKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->