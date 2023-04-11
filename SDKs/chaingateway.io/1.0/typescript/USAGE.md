<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAddressRequest,
  DeleteAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAddressRequest = {
  authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
  deleteAddressRequest: {
    ethereumaddress: "corrupti",
    password: "provident",
  },
};

sdk.addressRequests.deleteAddress(req).then((res: DeleteAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->