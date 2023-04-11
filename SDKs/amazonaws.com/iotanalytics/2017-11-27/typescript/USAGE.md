<!-- Start SDK Example Usage -->
```typescript
import {
  BatchPutMessageRequest,
  BatchPutMessageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchPutMessageRequest = {
  requestBody: {
    channelName: "corrupti",
    messages: [
      {
        messageId: "distinctio",
        payload: "quibusdam",
      },
      {
        messageId: "unde",
        payload: "nulla",
      },
      {
        messageId: "corrupti",
        payload: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
};

sdk.batchPutMessage(req).then((res: BatchPutMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->