<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteSessionRequest,
  DeleteSessionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteSessionRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  botAlias: "illum",
  botName: "vel",
  userId: "error",
};

sdk.deleteSession(req).then((res: DeleteSessionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->