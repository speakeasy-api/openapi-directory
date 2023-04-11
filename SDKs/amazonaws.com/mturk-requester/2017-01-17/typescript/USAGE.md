<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptQualificationRequestRequest,
  AcceptQualificationRequestResponse,
  AcceptQualificationRequestXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptQualificationRequestRequest = {
  acceptQualificationRequestRequest: {
    integerValue: 548814,
    qualificationRequestId: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AcceptQualificationRequestXAmzTargetEnum.MTurkRequesterServiceV20170117AcceptQualificationRequest,
};

sdk.acceptQualificationRequest(req).then((res: AcceptQualificationRequestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->