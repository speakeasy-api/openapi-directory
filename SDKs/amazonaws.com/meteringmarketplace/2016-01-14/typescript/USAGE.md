<!-- Start SDK Example Usage -->
```typescript
import {
  BatchMeterUsageRequest,
  BatchMeterUsageResponse,
  BatchMeterUsageXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchMeterUsageRequest = {
  batchMeterUsageRequest: {
    productCode: "corrupti",
    usageRecords: [
      {
        customerIdentifier: "distinctio",
        dimension: "quibusdam",
        quantity: 602763,
        timestamp: "2021-05-14T08:28:11.899Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 423655,
            tags: [
              {
                key: "deserunt",
                value: "suscipit",
              },
              {
                key: "iure",
                value: "magnam",
              },
              {
                key: "debitis",
                value: "ipsa",
              },
            ],
          },
          {
            allocatedUsageQuantity: 963663,
            tags: [
              {
                key: "suscipit",
                value: "molestiae",
              },
              {
                key: "minus",
                value: "placeat",
              },
            ],
          },
          {
            allocatedUsageQuantity: 528895,
            tags: [
              {
                key: "excepturi",
                value: "nisi",
              },
              {
                key: "recusandae",
                value: "temporibus",
              },
            ],
          },
          {
            allocatedUsageQuantity: 71036,
            tags: [
              {
                key: "veritatis",
                value: "deserunt",
              },
              {
                key: "perferendis",
                value: "ipsam",
              },
            ],
          },
        ],
      },
      {
        customerIdentifier: "repellendus",
        dimension: "sapiente",
        quantity: 778157,
        timestamp: "2022-02-17T10:41:36.857Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 978619,
            tags: [
              {
                key: "quod",
                value: "quod",
              },
              {
                key: "esse",
                value: "totam",
              },
            ],
          },
          {
            allocatedUsageQuantity: 780529,
            tags: [
              {
                key: "dicta",
                value: "nam",
              },
              {
                key: "officia",
                value: "occaecati",
              },
              {
                key: "fugit",
                value: "deleniti",
              },
            ],
          },
          {
            allocatedUsageQuantity: 944669,
            tags: [
              {
                key: "totam",
                value: "beatae",
              },
              {
                key: "commodi",
                value: "molestiae",
              },
              {
                key: "modi",
                value: "qui",
              },
              {
                key: "impedit",
                value: "cum",
              },
            ],
          },
          {
            allocatedUsageQuantity: 456150,
            tags: [
              {
                key: "excepturi",
                value: "aspernatur",
              },
            ],
          },
        ],
      },
      {
        customerIdentifier: "perferendis",
        dimension: "ad",
        quantity: 617636,
        timestamp: "2022-05-22T14:02:28.908Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 616934,
            tags: [
              {
                key: "hic",
                value: "saepe",
              },
              {
                key: "fuga",
                value: "in",
              },
            ],
          },
        ],
      },
    ],
  },
  xAmzAlgorithm: "corporis",
  xAmzContentSha256: "iste",
  xAmzCredential: "iure",
  xAmzDate: "saepe",
  xAmzSecurityToken: "quidem",
  xAmzSignature: "architecto",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: BatchMeterUsageXAmzTargetEnum.AWSMPMeteringServiceBatchMeterUsage,
};

sdk.batchMeterUsage(req).then((res: BatchMeterUsageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->