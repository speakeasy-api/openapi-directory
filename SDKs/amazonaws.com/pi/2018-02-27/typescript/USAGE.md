<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DescribeDimensionKeysXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ServiceTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeDimensionKeysRequest = {
  describeDimensionKeysRequest: {
    additionalMetrics: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    endTime: "2021-04-14T16:47:33.722Z",
    filter: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
    groupBy: {
      dimensions: [
        "debitis",
        "ipsa",
      ],
      group: "delectus",
      limit: 272656,
    },
    identifier: "suscipit",
    maxResults: 477665,
    metric: "minus",
    nextToken: "placeat",
    partitionBy: {
      dimensions: [
        "iusto",
        "excepturi",
        "nisi",
      ],
      group: "recusandae",
      limit: 836079,
    },
    periodInSeconds: 71036,
    serviceType: ServiceTypeEnum.Rds,
    startTime: "2022-05-09T10:00:51.349Z",
  },
  maxResults: "perferendis",
  nextToken: "ipsam",
  xAmzAlgorithm: "repellendus",
  xAmzContentSha256: "sapiente",
  xAmzCredential: "quo",
  xAmzDate: "odit",
  xAmzSecurityToken: "at",
  xAmzSignature: "at",
  xAmzSignedHeaders: "maiores",
  xAmzTarget: DescribeDimensionKeysXAmzTargetEnum.PerformanceInsightsv20180227DescribeDimensionKeys,
};

sdk.describeDimensionKeys(req).then((res: DescribeDimensionKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->