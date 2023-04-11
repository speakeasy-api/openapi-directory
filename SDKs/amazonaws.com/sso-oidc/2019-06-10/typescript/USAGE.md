<!-- Start SDK Example Usage -->
```typescript
import {
  CreateTokenRequest,
  CreateTokenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateTokenRequest = {
  requestBody: {
    clientId: "corrupti",
    clientSecret: "provident",
    code: "distinctio",
    deviceCode: "quibusdam",
    grantType: "unde",
    redirectUri: "nulla",
    refreshToken: "corrupti",
    scope: [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.createToken(req).then((res: CreateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->