<!-- Start SDK Example Usage -->
```typescript
import {
  GetUserExtensionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.user.getUserExtensions().then((res: GetUserExtensionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->