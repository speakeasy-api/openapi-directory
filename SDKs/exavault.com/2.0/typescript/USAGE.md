<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountRequest,
  GetAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountRequest = {
  evAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
  evApiKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
  include: "masterUser",
};

sdk.account.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->