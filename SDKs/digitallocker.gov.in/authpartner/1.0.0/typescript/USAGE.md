<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountDetailApiIdRequest, AccountDetailApiIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountDetailApiIdRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
};

sdk.accountDetailAPI.accountDetailApiId(req).then((res: AccountDetailApiIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->