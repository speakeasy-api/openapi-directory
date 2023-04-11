<!-- Start SDK Example Usage -->
```typescript
import {
  GETCloneReceiptRuleSetRequest,
  GETCloneReceiptRuleSetResponse,
  GETCloneReceiptRuleSetActionEnum,
  GETCloneReceiptRuleSetVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETCloneReceiptRuleSetRequest = {
  action: GETCloneReceiptRuleSetActionEnum.CloneReceiptRuleSet,
  originalRuleSetName: "corrupti",
  ruleSetName: "provident",
  version: GETCloneReceiptRuleSetVersionEnum.TwoThousandAndTen1201,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getCloneReceiptRuleSet(req).then((res: GETCloneReceiptRuleSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->