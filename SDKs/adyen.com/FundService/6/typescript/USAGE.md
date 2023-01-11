<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostAccountHolderBalanceRequest, PostAccountHolderBalanceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostAccountHolderBalanceRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.general.postAccountHolderBalance(req).then((res: PostAccountHolderBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->