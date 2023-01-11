<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAppsIdRequest, DeleteAppsIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAppsIdRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.apps.deleteAppsId(req).then((res: DeleteAppsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->