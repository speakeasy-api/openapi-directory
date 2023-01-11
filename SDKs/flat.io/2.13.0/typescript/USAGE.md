<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuthenticatedUserRequest, GetAuthenticatedUserResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAuthenticatedUserRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    onlyId: false,
  },
};

sdk.account.getAuthenticatedUser(req).then((res: GetAuthenticatedUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->