<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchGetTracesRequest, BatchGetTracesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetTracesRequest = {
  queryParams: {
    nextToken: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    nextToken: "fugit",
    traceIds: [
      "nihil",
    ],
  },
};

sdk.batchGetTraces(req).then((res: BatchGetTracesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->