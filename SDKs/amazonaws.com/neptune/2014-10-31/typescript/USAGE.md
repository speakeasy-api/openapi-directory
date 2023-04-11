<!-- Start SDK Example Usage -->
```typescript
import {
  GETAddRoleToDBClusterRequest,
  GETAddRoleToDBClusterResponse,
  GETAddRoleToDBClusterActionEnum,
  GETAddRoleToDBClusterVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAddRoleToDBClusterRequest = {
  action: GETAddRoleToDBClusterActionEnum.AddRoleToDBCluster,
  dbClusterIdentifier: "corrupti",
  featureName: "provident",
  roleArn: "distinctio",
  version: GETAddRoleToDBClusterVersionEnum.TwoThousandAndFourteen1031,
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
};

sdk.getAddRoleToDBCluster(req).then((res: GETAddRoleToDBClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->