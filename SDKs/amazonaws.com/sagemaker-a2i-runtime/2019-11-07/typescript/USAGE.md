<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteHumanLoopRequest,
  DeleteHumanLoopResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteHumanLoopRequest = {
  humanLoopName: "corrupti",
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.deleteHumanLoop(req).then((res: DeleteHumanLoopResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->