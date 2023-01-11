<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountCreateRecoveryRequest, AccountCreateRecoveryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountCreateRecoveryRequest = {
  security: {
    jwt: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    project: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    email: "sit",
    url: "voluptas",
  },
};

sdk.account.accountCreateRecovery(req).then((res: AccountCreateRecoveryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->