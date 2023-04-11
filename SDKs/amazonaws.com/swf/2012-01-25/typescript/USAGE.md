<!-- Start SDK Example Usage -->
```typescript
import {
  CountClosedWorkflowExecutionsRequest,
  CountClosedWorkflowExecutionsResponse,
  CountClosedWorkflowExecutionsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CloseStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CountClosedWorkflowExecutionsRequest = {
  countClosedWorkflowExecutionsInput: {
    closeStatusFilter: {
      status: CloseStatusEnum.Terminated,
    },
    closeTimeFilter: {
      latestDate: "2021-07-27T21:52:56.087Z",
      oldestDate: "2021-03-11T23:22:42.658Z",
    },
    domain: "nulla",
    executionFilter: {
      workflowId: "corrupti",
    },
    startTimeFilter: {
      latestDate: "2021-09-24T02:21:06.409Z",
      oldestDate: "2021-09-16T11:56:06.019Z",
    },
    tagFilter: {
      tag: "suscipit",
    },
    typeFilter: {
      name: "iure",
      version: "magnam",
    },
  },
  xAmzAlgorithm: "debitis",
  xAmzContentSha256: "ipsa",
  xAmzCredential: "delectus",
  xAmzDate: "tempora",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "molestiae",
  xAmzSignedHeaders: "minus",
  xAmzTarget: CountClosedWorkflowExecutionsXAmzTargetEnum.SimpleWorkflowServiceCountClosedWorkflowExecutions,
};

sdk.countClosedWorkflowExecutions(req).then((res: CountClosedWorkflowExecutionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->