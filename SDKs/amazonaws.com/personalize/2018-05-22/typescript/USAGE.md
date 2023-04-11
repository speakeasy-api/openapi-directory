<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBatchInferenceJobRequest,
  CreateBatchInferenceJobResponse,
  CreateBatchInferenceJobXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBatchInferenceJobRequest = {
  createBatchInferenceJobRequest: {
    batchInferenceJobConfig: {
      itemExplorationConfig: {
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
      },
    },
    filterArn: "illum",
    jobInput: {
      s3DataSource: {
        kmsKeyArn: "vel",
        path: "error",
      },
    },
    jobName: "deserunt",
    jobOutput: {
      s3DataDestination: {
        kmsKeyArn: "suscipit",
        path: "iure",
      },
    },
    numResults: 297534,
    roleArn: "debitis",
    solutionVersionArn: "ipsa",
    tags: [
      {
        tagKey: "tempora",
        tagValue: "suscipit",
      },
      {
        tagKey: "molestiae",
        tagValue: "minus",
      },
      {
        tagKey: "placeat",
        tagValue: "voluptatum",
      },
      {
        tagKey: "iusto",
        tagValue: "excepturi",
      },
    ],
  },
  xAmzAlgorithm: "nisi",
  xAmzContentSha256: "recusandae",
  xAmzCredential: "temporibus",
  xAmzDate: "ab",
  xAmzSecurityToken: "quis",
  xAmzSignature: "veritatis",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: CreateBatchInferenceJobXAmzTargetEnum.AmazonPersonalizeCreateBatchInferenceJob,
};

sdk.createBatchInferenceJob(req).then((res: CreateBatchInferenceJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->