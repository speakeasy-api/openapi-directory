<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAddressRequest, DeleteAddressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAddressRequest = {
  headers: {
    authorization: "sit",
  },
  request: {
    ethereumaddress: "voluptas",
    password: "culpa",
  },
};

sdk.addressRequests.deleteAddress(req).then((res: DeleteAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->