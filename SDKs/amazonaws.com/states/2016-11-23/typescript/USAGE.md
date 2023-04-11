<!-- Start SDK Example Usage -->
```typescript
import {
  CreateActivityRequest,
  CreateActivityResponse,
  CreateActivityXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateActivityRequest = {
  createActivityInput: {
    name: "corrupti",
    tags: [
      {
        key: "distinctio",
        value: "quibusdam",
      },
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
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
  xAmzTarget: CreateActivityXAmzTargetEnum.AWSStepFunctionsCreateActivity,
};

sdk.createActivity(req).then((res: CreateActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->