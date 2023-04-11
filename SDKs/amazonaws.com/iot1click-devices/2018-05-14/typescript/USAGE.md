<!-- Start SDK Example Usage -->
```typescript
import {
  ClaimDevicesByClaimCodeRequest,
  ClaimDevicesByClaimCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ClaimDevicesByClaimCodeRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  claimCode: "illum",
};

sdk.claimDevicesByClaimCode(req).then((res: ClaimDevicesByClaimCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->