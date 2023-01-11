<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiActivityRequest, GetApiActivityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApiActivityRequest = {
  security: {
    connectToken: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  queryParams: {
    limit: 8717895732742165505,
    offset: 2259404117704393152,
  },
};

sdk.activity.getApiActivity(req).then((res: GetApiActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->