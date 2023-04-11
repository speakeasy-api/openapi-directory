<!-- Start SDK Example Usage -->
```typescript
import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse,
  BatchExecuteStatementXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchExecuteStatementRequest = {
  batchExecuteStatementInput: {
    clientToken: "corrupti",
    clusterIdentifier: "provident",
    database: "distinctio",
    dbUser: "quibusdam",
    secretArn: "unde",
    sqls: [
      "corrupti",
      "illum",
      "vel",
      "error",
    ],
    statementName: "deserunt",
    withEvent: false,
    workgroupName: "suscipit",
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: BatchExecuteStatementXAmzTargetEnum.RedshiftDataBatchExecuteStatement,
};

sdk.batchExecuteStatement(req).then((res: BatchExecuteStatementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->