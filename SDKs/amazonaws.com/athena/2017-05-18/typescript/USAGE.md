<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchGetNamedQueryRequest, BatchGetNamedQueryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetNamedQueryRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonAthena.BatchGetNamedQuery",
  },
  request: {
    namedQueryIds: [
      "et",
    ],
  },
};

sdk.batchGetNamedQuery(req).then((res: BatchGetNamedQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->