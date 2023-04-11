<!-- Start SDK Example Usage -->
```typescript
import {
  AccountDeleteDomainWhitelistRequest,
  AccountDeleteDomainWhitelistResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AccountDeleteDomainWhitelistRequest = {
  whitelistId: "corrupti",
};

sdk.account.accountDeleteDomainWhitelist(req).then((res: AccountDeleteDomainWhitelistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->