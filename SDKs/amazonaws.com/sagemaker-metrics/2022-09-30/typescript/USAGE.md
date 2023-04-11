<!-- Start SDK Example Usage -->
```typescript
import {
  BatchPutMetricsRequest,
  BatchPutMetricsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchPutMetricsRequest = {
  requestBody: {
    metricData: [
      {
        metricName: "provident",
        step: 715190,
        timestamp: "2021-03-11T23:22:42.658Z",
        value: 8579.46,
      },
      {
        metricName: "corrupti",
        step: 847252,
        timestamp: "2022-05-18T09:34:54.894Z",
        value: 6458.94,
      },
      {
        metricName: "suscipit",
        step: 437587,
        timestamp: "2022-02-09T12:04:06.508Z",
        value: 567.13,
      },
    ],
    trialComponentName: "delectus",
  },
  xAmzAlgorithm: "tempora",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "molestiae",
  xAmzDate: "minus",
  xAmzSecurityToken: "placeat",
  xAmzSignature: "voluptatum",
  xAmzSignedHeaders: "iusto",
};

sdk.batchPutMetrics(req).then((res: BatchPutMetricsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->