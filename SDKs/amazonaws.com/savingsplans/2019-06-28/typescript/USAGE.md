<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSavingsPlanRequest,
  CreateSavingsPlanResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSavingsPlanRequest = {
  requestBody: {
    clientToken: "corrupti",
    commitment: "provident",
    purchaseTime: "2021-04-24T16:27:50.833Z",
    savingsPlanOfferingId: "unde",
    tags: {
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
    },
    upfrontPaymentAmount: "debitis",
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
};

sdk.createSavingsPlan(req).then((res: CreateSavingsPlanResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->