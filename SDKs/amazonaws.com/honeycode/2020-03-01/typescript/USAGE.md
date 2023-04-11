<!-- Start SDK Example Usage -->
```typescript
import {
  BatchCreateTableRowsRequest,
  BatchCreateTableRowsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchCreateTableRowsRequest = {
  requestBody: {
    clientRequestToken: "corrupti",
    rowsToCreate: [
      {
        batchItemId: "distinctio",
        cellsToCreate: {
          "unde": {
            fact: "nulla",
            facts: [
              "illum",
              "vel",
              "error",
            ],
          },
          "deserunt": {
            fact: "suscipit",
            facts: [
              "magnam",
              "debitis",
            ],
          },
          "ipsa": {
            fact: "delectus",
            facts: [
              "suscipit",
              "molestiae",
            ],
          },
          "minus": {
            fact: "placeat",
            facts: [
              "iusto",
              "excepturi",
              "nisi",
            ],
          },
        },
      },
      {
        batchItemId: "recusandae",
        cellsToCreate: {
          "ab": {
            fact: "quis",
            facts: [
              "deserunt",
            ],
          },
          "perferendis": {
            fact: "ipsam",
            facts: [
              "sapiente",
              "quo",
              "odit",
              "at",
            ],
          },
          "at": {
            fact: "maiores",
            facts: [
              "quod",
              "quod",
            ],
          },
          "esse": {
            fact: "totam",
            facts: [
              "dolorum",
              "dicta",
              "nam",
              "officia",
            ],
          },
        },
      },
      {
        batchItemId: "occaecati",
        cellsToCreate: {
          "deleniti": {
            fact: "hic",
            facts: [
              "totam",
              "beatae",
              "commodi",
              "molestiae",
            ],
          },
        },
      },
    ],
  },
  xAmzAlgorithm: "modi",
  xAmzContentSha256: "qui",
  xAmzCredential: "impedit",
  xAmzDate: "cum",
  xAmzSecurityToken: "esse",
  xAmzSignature: "ipsum",
  xAmzSignedHeaders: "excepturi",
  tableId: "aspernatur",
  workbookId: "perferendis",
};

sdk.batchCreateTableRows(req).then((res: BatchCreateTableRowsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->