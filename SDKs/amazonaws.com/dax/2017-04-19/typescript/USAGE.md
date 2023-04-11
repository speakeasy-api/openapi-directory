<!-- Start SDK Example Usage -->
```typescript
import {
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ClusterEndpointEncryptionTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateClusterRequest = {
  createClusterRequest: {
    availabilityZones: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    clusterEndpointEncryptionType: ClusterEndpointEncryptionTypeEnum.Tls,
    clusterName: "nulla",
    description: "corrupti",
    iamRoleArn: "illum",
    nodeType: "vel",
    notificationTopicArn: "error",
    parameterGroupName: "deserunt",
    preferredMaintenanceWindow: "suscipit",
    replicationFactor: 437587,
    sseSpecification: {
      enabled: false,
    },
    securityGroupIds: [
      "debitis",
      "ipsa",
    ],
    subnetGroupName: "delectus",
    tags: [
      {
        key: "suscipit",
        value: "molestiae",
      },
      {
        key: "minus",
        value: "placeat",
      },
    ],
  },
  xAmzAlgorithm: "voluptatum",
  xAmzContentSha256: "iusto",
  xAmzCredential: "excepturi",
  xAmzDate: "nisi",
  xAmzSecurityToken: "recusandae",
  xAmzSignature: "temporibus",
  xAmzSignedHeaders: "ab",
  xAmzTarget: CreateClusterXAmzTargetEnum.AmazonDaxv3CreateCluster,
};

sdk.createCluster(req).then((res: CreateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->