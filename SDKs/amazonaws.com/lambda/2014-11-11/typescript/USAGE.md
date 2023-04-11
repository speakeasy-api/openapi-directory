<!-- Start SDK Example Usage -->
```typescript
import {
  AddEventSourceRequest,
  AddEventSourceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddEventSourceRequest = {
  requestBody: {
    batchSize: 548814,
    eventSource: "provident",
    functionName: "distinctio",
    parameters: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    role: "iure",
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.addEventSource(req).then((res: AddEventSourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->