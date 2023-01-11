<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddRoleToDbClusterRequest, GetAddRoleToDbClusterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAddRoleToDbClusterRequest = {
  queryParams: {
    action: "AddRoleToDBCluster",
    dbClusterIdentifier: "voluptas",
    featureName: "culpa",
    roleArn: "expedita",
    version: "2014-10-31",
  },
  headers: {
    xAmzAlgorithm: "dolor",
    xAmzContentSha256: "expedita",
    xAmzCredential: "voluptas",
    xAmzDate: "fugit",
    xAmzSecurityToken: "et",
    xAmzSignature: "nihil",
    xAmzSignedHeaders: "rerum",
  },
};

sdk.getAddRoleToDbCluster(req).then((res: GetAddRoleToDbClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->