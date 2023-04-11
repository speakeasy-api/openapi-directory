<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetMetricDataRequest,
  BatchGetMetricDataResponse
} from "openapi/dist/sdk/models/operations";
import {
  MetricNamespaceEnum,
  MetricEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetMetricDataRequest = {
  requestBody: {
    queries: [
      {
        dimensions: {
          "distinctio": "quibusdam",
          "unde": "nulla",
          "corrupti": "illum",
        },
        endDate: "2022-05-18T09:34:54.894Z",
        id: "deserunt",
        metric: MetricEnum.TransientBounce,
        namespace: MetricNamespaceEnum.Vdm,
        startDate: "2022-09-14T09:35:47.986Z",
      },
      {
        dimensions: {
          "ipsa": "delectus",
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
        endDate: "2022-06-07T15:55:46.205Z",
        id: "nisi",
        metric: MetricEnum.DeliveryComplaint,
        namespace: MetricNamespaceEnum.Vdm,
        startDate: "2022-10-15T05:10:19.629Z",
      },
      {
        dimensions: {
          "veritatis": "deserunt",
          "perferendis": "ipsam",
        },
        endDate: "2020-02-17T21:57:45.117Z",
        id: "quo",
        metric: MetricEnum.Complaint,
        namespace: MetricNamespaceEnum.Vdm,
        startDate: "2020-05-23T06:06:25.221Z",
      },
    ],
  },
  xAmzAlgorithm: "maiores",
  xAmzContentSha256: "molestiae",
  xAmzCredential: "quod",
  xAmzDate: "quod",
  xAmzSecurityToken: "esse",
  xAmzSignature: "totam",
  xAmzSignedHeaders: "porro",
};

sdk.batchGetMetricData(req).then((res: BatchGetMetricDataResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->