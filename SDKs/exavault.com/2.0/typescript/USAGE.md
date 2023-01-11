<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountRequest, GetAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAccountRequest = {
  queryParams: {
    include: "sit",
  },
  headers: {
    evAccessToken: "voluptas",
    evApiKey: "culpa",
  },
};

sdk.account.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->