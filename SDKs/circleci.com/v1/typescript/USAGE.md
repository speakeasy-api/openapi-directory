<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteProjectUsernameProjectBuildCacheRequest,
  DeleteProjectUsernameProjectBuildCacheResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteProjectUsernameProjectBuildCacheRequest = {
  project: "corrupti",
  username: "Larue_Rau85",
};

sdk.deleteProjectUsernameProjectBuildCache(req).then((res: DeleteProjectUsernameProjectBuildCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->