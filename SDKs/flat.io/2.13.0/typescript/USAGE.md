<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuthenticatedUserRequest,
  GetAuthenticatedUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAuthenticatedUserRequest = {
  onlyId: false,
};

sdk.account.getAuthenticatedUser(req).then((res: GetAuthenticatedUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->