<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CountClosedWorkflowExecutionsRequest, CountClosedWorkflowExecutionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CountClosedWorkflowExecutionsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
  },
  request: {
    closeStatusFilter: {
      status: "COMPLETED",
    },
    closeTimeFilter: {
      latestDate: "2011-08-12T10:11:12Z",
      oldestDate: "2003-05-13T04:57:12Z",
    },
    domain: "rerum",
    executionFilter: {
      workflowId: "dicta",
    },
    startTimeFilter: {
      latestDate: "2004-06-02T10:14:12Z",
      oldestDate: "1981-07-21T06:30:48Z",
    },
    tagFilter: {
      tag: "et",
    },
    typeFilter: {
      name: "ut",
      version: "dolorem",
    },
  },
};

sdk.countClosedWorkflowExecutions(req).then((res: CountClosedWorkflowExecutionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->