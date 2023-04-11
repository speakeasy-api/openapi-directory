<!-- Start SDK Example Usage -->
```typescript
import {
  CreateClusterRequest,
  CreateClusterResponse
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
    clientToken: "corrupti",
    clusterName: "provident",
    tags: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
};

sdk.createCluster(req).then((res: CreateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->