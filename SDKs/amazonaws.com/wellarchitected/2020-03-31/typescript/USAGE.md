<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateLensesRequest,
  AssociateLensesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateLensesRequest = {
  requestBody: {
    lensAliases: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  workloadId: "unde",
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.associateLenses(req).then((res: AssociateLensesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->