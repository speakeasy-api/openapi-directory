<!-- Start SDK Example Usage -->
```typescript
import {
  AdminGetUserRequest,
  AdminGetUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdminGetUserRequest = {
  id: 548814,
};

sdk.admin.adminGetUser(req).then((res: AdminGetUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->