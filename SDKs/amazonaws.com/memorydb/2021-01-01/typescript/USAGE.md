<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchUpdateClusterRequest, BatchUpdateClusterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchUpdateClusterRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
  },
  request: {
    clusterNames: [
      "et",
    ],
    serviceUpdate: {
      serviceUpdateNameToApply: "nihil",
    },
  },
};

sdk.batchUpdateCluster(req).then((res: BatchUpdateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->