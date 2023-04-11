<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptMatchRequest,
  AcceptMatchResponse,
  AcceptMatchXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AcceptanceTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptMatchRequest = {
  acceptMatchInput: {
    acceptanceType: AcceptanceTypeEnum.Reject,
    playerIds: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    ticketId: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: AcceptMatchXAmzTargetEnum.GameLiftAcceptMatch,
};

sdk.acceptMatch(req).then((res: AcceptMatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->