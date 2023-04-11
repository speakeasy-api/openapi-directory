<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMonitorRequest,
  CreateMonitorResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateMonitorRequest = {
  requestBody: {
    clientToken: "corrupti",
    maxCityNetworksToMonitor: 592845,
    monitorName: "distinctio",
    resources: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    tags: {
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.createMonitor(req).then((res: CreateMonitorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->