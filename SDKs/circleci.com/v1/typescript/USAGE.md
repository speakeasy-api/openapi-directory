<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteProjectUsernameProjectBuildCacheRequest, DeleteProjectUsernameProjectBuildCacheResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteProjectUsernameProjectBuildCacheRequest = {
  pathParams: {
    project: "sit",
    username: "voluptas",
  },
};

sdk.deleteProjectUsernameProjectBuildCache(req).then((res: DeleteProjectUsernameProjectBuildCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->