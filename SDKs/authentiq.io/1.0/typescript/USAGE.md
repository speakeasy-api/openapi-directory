<!-- Start SDK Example Usage -->
```typescript
import {
  AuthorizeRequest,
  AuthorizeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AuthorizeRequest = {
  clientId: "corrupti",
  display: "provident",
  maxAge: 715190,
  nonce: "quibusdam",
  prompt: "unde",
  redirectUri: "nulla",
  responseMode: "corrupti",
  responseType: "illum",
  scope: "vel",
  state: "error",
  uiLocales: "deserunt",
};

sdk.authentication.authorize(req).then((res: AuthorizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->