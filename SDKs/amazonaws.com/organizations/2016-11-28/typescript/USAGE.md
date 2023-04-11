<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptHandshakeRequest,
  AcceptHandshakeResponse,
  AcceptHandshakeXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptHandshakeRequest = {
  acceptHandshakeRequest: {
    handshakeId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AcceptHandshakeXAmzTargetEnum.AWSOrganizationsV20161128AcceptHandshake,
};

sdk.acceptHandshake(req).then((res: AcceptHandshakeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->