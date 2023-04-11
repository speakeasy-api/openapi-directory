<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExtendedSourceServerRequest,
  CreateExtendedSourceServerResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateExtendedSourceServerRequest = {
  requestBody: {
    sourceServerArn: "corrupti",
    tags: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
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

sdk.createExtendedSourceServer(req).then((res: CreateExtendedSourceServerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->