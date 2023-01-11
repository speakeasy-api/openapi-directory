<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchDeleteBuildsRequest, BatchDeleteBuildsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchDeleteBuildsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
  },
  request: {
    ids: [
      "et",
    ],
  },
};

sdk.batchDeleteBuilds(req).then((res: BatchDeleteBuildsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->