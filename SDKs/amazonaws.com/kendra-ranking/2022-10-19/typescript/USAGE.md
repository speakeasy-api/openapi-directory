<!-- Start SDK Example Usage -->
```typescript
import {
  CreateRescoreExecutionPlanRequest,
  CreateRescoreExecutionPlanResponse,
  CreateRescoreExecutionPlanXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateRescoreExecutionPlanRequest = {
  createRescoreExecutionPlanRequest: {
    capacityUnits: {
      rescoreCapacityUnits: 548814,
    },
    clientToken: "provident",
    description: "distinctio",
    name: "quibusdam",
    tags: [
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
      {
        key: "error",
        value: "deserunt",
      },
    ],
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
  xAmzTarget: CreateRescoreExecutionPlanXAmzTargetEnum.AWSKendraRerankingFrontendServiceCreateRescoreExecutionPlan,
};

sdk.createRescoreExecutionPlan(req).then((res: CreateRescoreExecutionPlanResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->