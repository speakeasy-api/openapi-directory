<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateFraudsterRequest,
  AssociateFraudsterResponse,
  AssociateFraudsterXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateFraudsterRequest = {
  associateFraudsterRequest: {
    domainId: "corrupti",
    fraudsterId: "provident",
    watchlistId: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: AssociateFraudsterXAmzTargetEnum.VoiceIDAssociateFraudster,
};

sdk.associateFraudster(req).then((res: AssociateFraudsterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->