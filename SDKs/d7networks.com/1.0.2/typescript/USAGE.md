<!-- Start SDK Example Usage -->
```typescript
import {
  BalanceGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

sdk.balanceGet().then((res: BalanceGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->