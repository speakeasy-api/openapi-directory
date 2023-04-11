<!-- Start SDK Example Usage -->
```typescript
import {
  AcknowledgeOrderReceiptRequest,
  AcknowledgeOrderReceiptResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcknowledgeOrderReceiptRequest = {
  requestBody: {
    orderArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.acknowledgeOrderReceipt(req).then((res: AcknowledgeOrderReceiptResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->