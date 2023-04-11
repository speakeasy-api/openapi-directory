<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Users2FALoginRequest,
  PostUsers2FALoginResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.Users2FALoginRequest = {
  code: "123456",
  login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

sdk.authentication.postUsers2FALogin(req).then((res: PostUsers2FALoginResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->