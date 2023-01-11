<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateClusterRequest, CreateClusterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateClusterRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonDAXV3.CreateCluster",
  },
  request: {
    availabilityZones: [
      "et",
    ],
    clusterEndpointEncryptionType: "NONE",
    clusterName: "rerum",
    description: "dicta",
    iamRoleArn: "debitis",
    nodeType: "voluptatum",
    notificationTopicArn: "et",
    parameterGroupName: "ut",
    preferredMaintenanceWindow: "dolorem",
    replicationFactor: 7259475919510918339,
    sseSpecification: {
      enabled: false,
    },
    securityGroupIds: [
      "vitae",
      "totam",
      "dolores",
    ],
    subnetGroupName: "illum",
    tags: [
      {
        key: "vel",
        value: "odio",
      },
    ],
  },
};

sdk.createCluster(req).then((res: CreateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->