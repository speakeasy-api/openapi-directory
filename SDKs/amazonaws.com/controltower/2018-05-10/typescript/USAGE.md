<!-- Start SDK Example Usage -->
```typescript
import {
  DisableControlRequest,
  DisableControlResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DisableControlRequest = {
  requestBody: {
    controlIdentifier: "corrupti",
    targetIdentifier: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.disableControl(req).then((res: DisableControlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->