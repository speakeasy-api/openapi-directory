<!-- Start SDK Example Usage -->
```typescript
import {
  ApplyArchiveRuleRequest,
  ApplyArchiveRuleResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ApplyArchiveRuleRequest = {
  requestBody: {
    analyzerArn: "corrupti",
    clientToken: "provident",
    ruleName: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
};

sdk.applyArchiveRule(req).then((res: ApplyArchiveRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->