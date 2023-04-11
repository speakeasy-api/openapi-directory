<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetCollectionRequest,
  BatchGetCollectionResponse,
  BatchGetCollectionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetCollectionRequest = {
  batchGetCollectionRequest: {
    ids: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    names: [
      "nulla",
      "corrupti",
      "illum",
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: BatchGetCollectionXAmzTargetEnum.OpenSearchServerlessBatchGetCollection,
};

sdk.batchGetCollection(req).then((res: BatchGetCollectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->