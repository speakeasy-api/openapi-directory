<!-- Start SDK Example Usage -->
```typescript
import {
  BatchUpdateClusterRequest,
  BatchUpdateClusterResponse,
  BatchUpdateClusterXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchUpdateClusterRequest = {
  batchUpdateClusterRequest: {
    clusterNames: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    serviceUpdate: {
      serviceUpdateNameToApply: "unde",
    },
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: BatchUpdateClusterXAmzTargetEnum.AmazonMemoryDBBatchUpdateCluster,
};

sdk.batchUpdateCluster(req).then((res: BatchUpdateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->