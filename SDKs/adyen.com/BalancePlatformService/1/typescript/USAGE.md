<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountHoldersIdRequest, GetAccountHoldersIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAccountHoldersIdRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.accountHolders.getAccountHoldersId(req).then((res: GetAccountHoldersIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->