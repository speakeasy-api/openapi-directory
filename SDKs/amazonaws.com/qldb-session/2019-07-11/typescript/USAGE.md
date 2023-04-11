<!-- Start SDK Example Usage -->
```typescript
import {
  SendCommandRequest,
  SendCommandResponse,
  SendCommandXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: SendCommandRequest = {
  sendCommandRequest: {
    abortTransaction: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    commitTransaction: {
      commitDigest: "illum",
      transactionId: "vel",
    },
    endSession: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    executeStatement: {
      parameters: [
        {
          ionBinary: "tempora",
          ionText: "suscipit",
        },
        {
          ionBinary: "molestiae",
          ionText: "minus",
        },
        {
          ionBinary: "placeat",
          ionText: "voluptatum",
        },
        {
          ionBinary: "iusto",
          ionText: "excepturi",
        },
      ],
      statement: "nisi",
      transactionId: "recusandae",
    },
    fetchPage: {
      nextPageToken: "temporibus",
      transactionId: "ab",
    },
    sessionToken: "quis",
    startSession: {
      ledgerName: "veritatis",
    },
    startTransaction: {
      "perferendis": "ipsam",
      "repellendus": "sapiente",
      "quo": "odit",
    },
  },
  xAmzAlgorithm: "at",
  xAmzContentSha256: "at",
  xAmzCredential: "maiores",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "quod",
  xAmzSignature: "quod",
  xAmzSignedHeaders: "esse",
  xAmzTarget: SendCommandXAmzTargetEnum.QLDBSessionSendCommand,
};

sdk.sendCommand(req).then((res: SendCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->