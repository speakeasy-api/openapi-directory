<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptGrantRequest,
  AcceptGrantResponse,
  AcceptGrantXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptGrantRequest = {
  acceptGrantRequest: {
    grantArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AcceptGrantXAmzTargetEnum.AWSLicenseManagerAcceptGrant,
};

sdk.acceptGrant(req).then((res: AcceptGrantResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->