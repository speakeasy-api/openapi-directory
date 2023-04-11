<!-- Start SDK Example Usage -->
```typescript
import {
  ListRealtimeContactAnalysisSegmentsRequest,
  ListRealtimeContactAnalysisSegmentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ListRealtimeContactAnalysisSegmentsRequest = {
  maxResults: "corrupti",
  nextToken: "provident",
  requestBody: {
    contactId: "distinctio",
    instanceId: "quibusdam",
    maxResults: 602763,
    nextToken: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
};

sdk.listRealtimeContactAnalysisSegments(req).then((res: ListRealtimeContactAnalysisSegmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->