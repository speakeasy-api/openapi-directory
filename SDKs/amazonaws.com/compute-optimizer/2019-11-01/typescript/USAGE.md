<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DescribeRecommendationExportJobsRequest, DescribeRecommendationExportJobsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeRecommendationExportJobsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "ComputeOptimizerService.DescribeRecommendationExportJobs",
  },
  request: {
    filters: [
      {
        name: "ResourceType",
        values: [
          "rerum",
        ],
      },
    ],
    jobIds: [
      "debitis",
      "voluptatum",
      "et",
    ],
    maxResults: 7144924247938981575,
    nextToken: "dolorem",
  },
};

sdk.describeRecommendationExportJobs(req).then((res: DescribeRecommendationExportJobsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->