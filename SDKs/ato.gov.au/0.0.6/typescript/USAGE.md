<!-- Start SDK Example Usage -->
```typescript
import {
  GetClassificationsAddressTypesRequest,
  GetClassificationsAddressTypesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetClassificationsAddressTypesRequest = {
  apiKey: "corrupti",
};

sdk.addressTypes.getClassificationsAddressTypes(req).then((res: GetClassificationsAddressTypesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->