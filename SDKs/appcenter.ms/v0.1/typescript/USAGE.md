<!-- Start SDK Example Usage -->
```typescript
import {
  UsersGetUserMetadataResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.account.usersGetUserMetadata().then((res: UsersGetUserMetadataResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->