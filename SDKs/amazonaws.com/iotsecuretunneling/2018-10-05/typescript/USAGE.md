<!-- Start SDK Example Usage -->
```typescript
import {
  CloseTunnelRequest,
  CloseTunnelResponse,
  CloseTunnelXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CloseTunnelRequest = {
  closeTunnelRequest: {
    delete: false,
    tunnelId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CloseTunnelXAmzTargetEnum.IoTSecuredTunnelingCloseTunnel,
};

sdk.closeTunnel(req).then((res: CloseTunnelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->