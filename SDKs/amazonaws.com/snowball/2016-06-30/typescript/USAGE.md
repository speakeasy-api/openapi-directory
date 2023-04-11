<!-- Start SDK Example Usage -->
```typescript
import {
  CancelClusterRequest,
  CancelClusterResponse,
  CancelClusterXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelClusterRequest = {
  cancelClusterRequest: {
    clusterId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CancelClusterXAmzTargetEnum.AWSIESnowballJobManagementServiceCancelCluster,
};

sdk.cancelCluster(req).then((res: CancelClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->