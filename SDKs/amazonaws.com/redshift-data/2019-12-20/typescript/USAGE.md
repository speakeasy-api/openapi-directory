<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchExecuteStatementRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "RedshiftData.BatchExecuteStatement",
  },
  request: {
    clusterIdentifier: "fugit",
    database: "et",
    dbUser: "nihil",
    secretArn: "rerum",
    sqls: [
      "debitis",
      "voluptatum",
      "et",
    ],
    statementName: "ut",
    withEvent: true,
  },
};

sdk.batchExecuteStatement(req).then((res: BatchExecuteStatementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->