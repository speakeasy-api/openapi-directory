<!-- Start SDK Example Usage -->
```typescript
import {
  AllocateStaticIpRequest,
  AllocateStaticIpResponse,
  AllocateStaticIpXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AllocateStaticIpRequest = {
  allocateStaticIpRequest: {
    staticIpName: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AllocateStaticIpXAmzTargetEnum.Lightsail20161128AllocateStaticIp,
};

sdk.allocateStaticIp(req).then((res: AllocateStaticIpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->