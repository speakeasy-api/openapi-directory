<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApplicationRequest,
  CreateApplicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateApplicationRequest = {
  requestBody: {
    applicationDescription: "corrupti",
    applicationName: "provident",
    clientToken: "distinctio",
    roleArn: "quibusdam",
    tags: {
      "nulla": "corrupti",
      "illum": "vel",
      "error": "deserunt",
    },
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->