<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAppRequest,
  CreateAppResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAppRequest = {
  requestBody: {
    createApplicationRequest: {
      name: "corrupti",
      tags: {
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
      },
    },
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
};

sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->