<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetItemRequest,
  BatchGetItemResponse,
  BatchGetItemXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetItemRequest = {
  batchGetItemInput: {
    requestItems: {
      "provident": {
        attributesToGet: [
          "quibusdam",
          "unde",
          "nulla",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "illum",
              bs: [
                "error",
                "deserunt",
              ],
              n: "suscipit",
              ns: [
                "magnam",
                "debitis",
              ],
              s: "ipsa",
              ss: [
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
              ],
            },
            rangeKeyElement: {
              b: "placeat",
              bs: [
                "iusto",
                "excepturi",
                "nisi",
              ],
              n: "recusandae",
              ns: [
                "ab",
                "quis",
                "veritatis",
                "deserunt",
              ],
              s: "perferendis",
              ss: [
                "repellendus",
                "sapiente",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "quo",
              bs: [
                "at",
              ],
              n: "at",
              ns: [
                "molestiae",
                "quod",
                "quod",
                "esse",
              ],
              s: "totam",
              ss: [
                "dolorum",
                "dicta",
                "nam",
                "officia",
              ],
            },
            rangeKeyElement: {
              b: "occaecati",
              bs: [
                "deleniti",
              ],
              n: "hic",
              ns: [
                "totam",
                "beatae",
                "commodi",
                "molestiae",
              ],
              s: "modi",
              ss: [
                "impedit",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "cum",
              bs: [
                "ipsum",
                "excepturi",
              ],
              n: "aspernatur",
              ns: [
                "ad",
              ],
              s: "natus",
              ss: [
                "iste",
              ],
            },
            rangeKeyElement: {
              b: "dolor",
              bs: [
                "laboriosam",
                "hic",
                "saepe",
              ],
              n: "fuga",
              ns: [
                "corporis",
                "iste",
              ],
              s: "iure",
              ss: [
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
              ],
            },
          },
        ],
      },
      "est": {
        attributesToGet: [
          "laborum",
          "dolores",
          "dolorem",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "explicabo",
              bs: [
                "enim",
                "omnis",
                "nemo",
                "minima",
              ],
              n: "excepturi",
              ns: [
                "iure",
              ],
              s: "culpa",
              ss: [
                "sapiente",
                "architecto",
                "mollitia",
                "dolorem",
              ],
            },
            rangeKeyElement: {
              b: "culpa",
              bs: [
                "repellat",
              ],
              n: "mollitia",
              ns: [
                "numquam",
                "commodi",
                "quam",
              ],
              s: "molestiae",
              ss: [
                "error",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "quia",
              bs: [
                "vitae",
                "laborum",
              ],
              n: "animi",
              ns: [
                "odit",
                "quo",
              ],
              s: "sequi",
              ss: [
                "ipsam",
                "id",
                "possimus",
                "aut",
              ],
            },
            rangeKeyElement: {
              b: "quasi",
              bs: [
                "temporibus",
                "laborum",
                "quasi",
              ],
              n: "reiciendis",
              ns: [
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
              ],
              s: "ipsa",
              ss: [
                "voluptate",
                "cum",
                "perferendis",
              ],
            },
          },
        ],
      },
      "doloremque": {
        attributesToGet: [
          "ut",
          "maiores",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "corporis",
              bs: [
                "iusto",
                "dicta",
              ],
              n: "harum",
              ns: [
                "accusamus",
                "commodi",
              ],
              s: "repudiandae",
              ss: [
                "ipsum",
              ],
            },
            rangeKeyElement: {
              b: "quidem",
              bs: [
                "excepturi",
                "pariatur",
                "modi",
              ],
              n: "praesentium",
              ns: [
                "voluptates",
                "quasi",
                "repudiandae",
              ],
              s: "sint",
              ss: [
                "itaque",
              ],
            },
          },
        ],
      },
    },
  },
  requestItems: "incidunt",
  xAmzAlgorithm: "enim",
  xAmzContentSha256: "consequatur",
  xAmzCredential: "est",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "explicabo",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "distinctio",
  xAmzTarget: BatchGetItemXAmzTargetEnum.DynamoDB20111205BatchGetItem,
};

sdk.batchGetItem(req).then((res: BatchGetItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->