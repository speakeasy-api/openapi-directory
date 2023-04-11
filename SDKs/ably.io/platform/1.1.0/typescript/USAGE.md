<!-- Start SDK Example Usage -->
```typescript
import {
  RequestAccessTokenRequest,
  RequestAccessTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  ResponseFormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
});

const req: RequestAccessTokenRequest = {
  requestBody: {
    capability: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    clientId: "vel",
    keyName: "xVLyHw.LMJZxw",
    mac: "error",
    nonce: "deserunt",
    timestamp: 384382,
  },
  xAblyVersion: "iure",
  format: ResponseFormatEnum.Jsonp,
  keyName: "debitis",
};

sdk.authentication.requestAccessToken(req).then((res: RequestAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->