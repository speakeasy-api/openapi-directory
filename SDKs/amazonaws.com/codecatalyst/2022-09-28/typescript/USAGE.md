<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccessTokenRequestBody,
  CreateAccessTokenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccessTokenRequestBody = {
  expiresTime: "2021-10-25T05:21:43.948Z",
  name: "distinctio",
};

sdk.createAccessToken(req).then((res: CreateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->