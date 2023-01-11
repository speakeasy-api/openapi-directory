<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountCreateRequest, AccountCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountCreateRequest = {
  security: {
    project: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    email: "sit",
    name: "voluptas",
    password: "culpa",
  },
};

sdk.account.accountCreate(req).then((res: AccountCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->