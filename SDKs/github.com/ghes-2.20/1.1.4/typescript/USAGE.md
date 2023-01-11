<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActivityCheckRepoIsStarredByAuthenticatedUserRequest, ActivityCheckRepoIsStarredByAuthenticatedUserResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivityCheckRepoIsStarredByAuthenticatedUserRequest = {
  pathParams: {
    owner: "sit",
    repo: "voluptas",
  },
};

sdk.activity.activityCheckRepoIsStarredByAuthenticatedUser(req).then((res: ActivityCheckRepoIsStarredByAuthenticatedUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->