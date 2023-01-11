<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeDimensionKeysRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
  },
  request: {
    endTime: "2011-08-12T10:11:12Z",
    filter: {
      "rerum": "dicta",
    },
    groupBy: {
      dimensions: [
        "voluptatum",
      ],
      group: "et",
      limit: 7144924247938981575,
    },
    identifier: "dolorem",
    maxResults: 7259475919510918339,
    metric: "voluptate",
    nextToken: "iste",
    partitionBy: {
      dimensions: [
        "totam",
      ],
      group: "dolores",
      limit: 1929546706668609706,
    },
    periodInSeconds: 6392442863481646880,
    serviceType: "RDS",
    startTime: "2003-08-14T16:48:00Z",
  },
};

sdk.describeDimensionKeys(req).then((res: DescribeDimensionKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->