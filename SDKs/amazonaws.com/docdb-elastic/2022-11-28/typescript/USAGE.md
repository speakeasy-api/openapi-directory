<!-- Start SDK Example Usage -->
```typescript
import {
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterRequestBodyAuthTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateClusterRequest = {
  requestBody: {
    adminUserName: "corrupti",
    adminUserPassword: "provident",
    authType: CreateClusterRequestBodyAuthTypeEnum.SecretArn,
    clientToken: "quibusdam",
    clusterName: "unde",
    kmsKeyId: "nulla",
    preferredMaintenanceWindow: "corrupti",
    shardCapacity: 847252,
    shardCount: 423655,
    subnetIds: [
      "deserunt",
      "suscipit",
      "iure",
    ],
    tags: {
      "debitis": "ipsa",
      "delectus": "tempora",
    },
    vpcSecurityGroupIds: [
      "molestiae",
      "minus",
    ],
  },
  xAmzAlgorithm: "placeat",
  xAmzContentSha256: "voluptatum",
  xAmzCredential: "iusto",
  xAmzDate: "excepturi",
  xAmzSecurityToken: "nisi",
  xAmzSignature: "recusandae",
  xAmzSignedHeaders: "temporibus",
};

sdk.createCluster(req).then((res: CreateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->