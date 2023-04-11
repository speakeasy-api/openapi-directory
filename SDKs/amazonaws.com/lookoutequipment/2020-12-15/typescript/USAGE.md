<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDatasetRequest = {
  createDatasetRequest: {
    clientToken: "corrupti",
    datasetName: "provident",
    datasetSchema: {
      inlineDataSchema: "distinctio",
    },
    serverSideKmsKeyId: "quibusdam",
    tags: [
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
      {
        key: "error",
        value: "deserunt",
      },
    ],
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
  xAmzTarget: CreateDatasetXAmzTargetEnum.AWSLookoutEquipmentFrontendServiceCreateDataset,
};

sdk.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->