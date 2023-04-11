<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetNamedQueryRequest,
  BatchGetNamedQueryResponse,
  BatchGetNamedQueryXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetNamedQueryRequest = {
  batchGetNamedQueryInput: {
    namedQueryIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: BatchGetNamedQueryXAmzTargetEnum.AmazonAthenaBatchGetNamedQuery,
};

sdk.batchGetNamedQuery(req).then((res: BatchGetNamedQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->