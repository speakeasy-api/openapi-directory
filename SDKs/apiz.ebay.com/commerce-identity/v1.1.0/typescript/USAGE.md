<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUserRequest, GetUserResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetUserRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
};

sdk.user.getUser(req).then((res: GetUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->