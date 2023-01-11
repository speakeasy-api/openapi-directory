<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { InstallKubernetesRequest, InstallKubernetesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: InstallKubernetesRequest = {
  request: {
    addonSlugs: [
      "voluptas",
    ],
    clusterUuid: "culpa",
  },
};

sdk.oneClickApplications.installKubernetes(req).then((res: InstallKubernetesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->