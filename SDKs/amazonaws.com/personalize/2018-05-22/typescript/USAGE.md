<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateBatchInferenceJobRequest, CreateBatchInferenceJobResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateBatchInferenceJobRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
  },
  request: {
    batchInferenceJobConfig: {
      itemExplorationConfig: {
        "et": "nihil",
      },
    },
    filterArn: "rerum",
    jobInput: {
      s3DataSource: {
        kmsKeyArn: "dicta",
        path: "debitis",
      },
    },
    jobName: "voluptatum",
    jobOutput: {
      s3DataDestination: {
        kmsKeyArn: "et",
        path: "ut",
      },
    },
    numResults: 161231572858529631,
    roleArn: "et",
    solutionVersionArn: "voluptate",
  },
};

sdk.createBatchInferenceJob(req).then((res: CreateBatchInferenceJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->