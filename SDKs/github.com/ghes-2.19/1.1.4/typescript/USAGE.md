<!-- Start SDK Example Usage -->
```typescript
import {
  ActivityCheckRepoIsStarredByAuthenticatedUserRequest,
  ActivityCheckRepoIsStarredByAuthenticatedUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActivityCheckRepoIsStarredByAuthenticatedUserRequest = {
  owner: "corrupti",
  repo: "provident",
};

sdk.activity.activityCheckRepoIsStarredByAuthenticatedUser(req).then((res: ActivityCheckRepoIsStarredByAuthenticatedUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->