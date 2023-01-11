<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchMeterUsageRequest, BatchMeterUsageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchMeterUsageRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
  },
  request: {
    productCode: "fugit",
    usageRecords: [
      {
        customerIdentifier: "nihil",
        dimension: "rerum",
        quantity: 7837839688282259259,
        timestamp: "2004-06-02T10:14:12Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 2339563716805116249,
            tags: [
              {
                key: "dolorem",
                value: "et",
              },
              {
                key: "voluptate",
                value: "iste",
              },
              {
                key: "vitae",
                value: "totam",
              },
            ],
          },
        ],
      },
    ],
  },
};

sdk.batchMeterUsage(req).then((res: BatchMeterUsageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->