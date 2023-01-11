<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchDeleteWorldsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    worlds: [
      "fugit",
      "et",
      "nihil",
    ],
  },
};

sdk.batchDeleteWorlds(req).then((res: BatchDeleteWorldsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->