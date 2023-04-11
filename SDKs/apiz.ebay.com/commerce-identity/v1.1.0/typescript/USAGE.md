<!-- Start SDK Example Usage -->
```typescript
import {
  GetUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.user.getUser().then((res: GetUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->