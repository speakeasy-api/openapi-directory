<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptEulasRequest,
  AcceptEulasResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptEulasRequest = {
  requestBody: {
    eulaIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  xAmzAlgorithm: "unde",
  xAmzClientToken: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
  studioId: "iure",
};

sdk.acceptEulas(req).then((res: AcceptEulasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->