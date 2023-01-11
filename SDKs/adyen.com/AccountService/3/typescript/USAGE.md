<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostCloseAccountHolderRequest, PostCloseAccountHolderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostCloseAccountHolderRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.accountHolders.postCloseAccountHolder(req).then((res: PostCloseAccountHolderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->