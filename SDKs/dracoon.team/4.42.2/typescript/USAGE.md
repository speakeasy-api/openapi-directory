<!-- Start SDK Example Usage -->
```typescript
import {
  CompleteOpenIdLoginRequest,
  CompleteOpenIdLoginResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CompleteOpenIdLoginRequest = {
  code: "corrupti",
  idToken: "provident",
  state: "distinctio",
};

sdk.auth.completeOpenIdLogin(req).then((res: CompleteOpenIdLoginResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->