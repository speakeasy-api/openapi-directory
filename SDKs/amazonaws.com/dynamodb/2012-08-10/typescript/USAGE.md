<!-- Start SDK Example Usage -->
```typescript
import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse,
  BatchExecuteStatementXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ReturnConsumedCapacityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchExecuteStatementRequest = {
  batchExecuteStatementInput: {
    returnConsumedCapacity: ReturnConsumedCapacityEnum.Total,
    statements: [
      {
        consistentRead: false,
        parameters: [
          {
            b: "quibusdam",
            bool: false,
            bs: [
              "nulla",
              "corrupti",
              "illum",
            ],
            l: [
              {},
              {},
            ],
            m: {
              "deserunt": {},
              "suscipit": {},
              "iure": {},
            },
            n: "magnam",
            ns: [
              "ipsa",
              "delectus",
              "tempora",
              "suscipit",
            ],
            null: false,
            s: "molestiae",
            ss: [
              "placeat",
              "voluptatum",
              "iusto",
              "excepturi",
            ],
          },
          {
            b: "nisi",
            bool: false,
            bs: [
              "temporibus",
              "ab",
              "quis",
              "veritatis",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "ipsam": {},
            },
            n: "repellendus",
            ns: [
              "quo",
              "odit",
              "at",
              "at",
            ],
            null: false,
            s: "maiores",
            ss: [
              "quod",
              "quod",
            ],
          },
          {
            b: "esse",
            bool: false,
            bs: [
              "porro",
              "dolorum",
              "dicta",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "occaecati": {},
              "fugit": {},
              "deleniti": {},
            },
            n: "hic",
            ns: [
              "totam",
              "beatae",
              "commodi",
              "molestiae",
            ],
            null: false,
            s: "modi",
            ss: [
              "impedit",
            ],
          },
        ],
        statement: "cum",
      },
      {
        consistentRead: false,
        parameters: [
          {
            b: "ipsum",
            bool: false,
            bs: [
              "aspernatur",
              "perferendis",
              "ad",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "iste": {},
            },
            n: "dolor",
            ns: [
              "laboriosam",
              "hic",
              "saepe",
            ],
            null: false,
            s: "fuga",
            ss: [
              "corporis",
              "iste",
            ],
          },
          {
            b: "iure",
            bool: false,
            bs: [
              "quidem",
              "architecto",
              "ipsa",
              "reiciendis",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "laborum": {},
              "dolores": {},
              "dolorem": {},
            },
            n: "corporis",
            ns: [
              "nobis",
            ],
            null: false,
            s: "enim",
            ss: [
              "nemo",
              "minima",
              "excepturi",
            ],
          },
        ],
        statement: "accusantium",
      },
      {
        consistentRead: false,
        parameters: [
          {
            b: "culpa",
            bool: false,
            bs: [
              "sapiente",
              "architecto",
              "mollitia",
              "dolorem",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "repellat": {},
            },
            n: "mollitia",
            ns: [
              "numquam",
              "commodi",
              "quam",
            ],
            null: false,
            s: "molestiae",
            ss: [
              "error",
            ],
          },
          {
            b: "quia",
            bool: false,
            bs: [
              "vitae",
              "laborum",
            ],
            l: [
              {},
              {},
              {},
            ],
            m: {
              "odit": {},
              "quo": {},
            },
            n: "sequi",
            ns: [
              "ipsam",
              "id",
              "possimus",
              "aut",
            ],
            null: false,
            s: "quasi",
            ss: [
              "temporibus",
              "laborum",
              "quasi",
            ],
          },
        ],
        statement: "reiciendis",
      },
    ],
  },
  xAmzAlgorithm: "voluptatibus",
  xAmzContentSha256: "vero",
  xAmzCredential: "nihil",
  xAmzDate: "praesentium",
  xAmzSecurityToken: "voluptatibus",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "omnis",
  xAmzTarget: BatchExecuteStatementXAmzTargetEnum.DynamoDB20120810BatchExecuteStatement,
};

sdk.batchExecuteStatement(req).then((res: BatchExecuteStatementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->