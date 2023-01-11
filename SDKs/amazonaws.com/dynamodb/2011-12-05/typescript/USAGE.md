<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchGetItemRequest, BatchGetItemResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetItemRequest = {
  queryParams: {
    requestItems: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
    xAmzTarget: "DynamoDB_20111205.BatchGetItem",
  },
  request: {
    requestItems: {
      "nihil": {
        attributesToGet: [
          "dicta",
          "debitis",
          "voluptatum",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "dolorem",
              bs: [
                "voluptate",
                "iste",
              ],
              n: "vitae",
              ns: [
                "dolores",
                "illum",
                "debitis",
              ],
              s: "vel",
              ss: [
                "dolore",
              ],
            },
            rangeKeyElement: {
              b: "id",
              bs: [
                "accusantium",
              ],
              n: "totam",
              ns: [
                "quis",
                "est",
              ],
              s: "aut",
              ss: [
                "non",
                "voluptas",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "omnis",
              bs: [
                "illo",
              ],
              n: "sed",
              ns: [
                "autem",
                "consectetur",
              ],
              s: "nobis",
              ss: [
                "qui",
              ],
            },
            rangeKeyElement: {
              b: "recusandae",
              bs: [
                "ipsum",
                "eveniet",
              ],
              n: "modi",
              ns: [
                "inventore",
              ],
              s: "ut",
              ss: [
                "aut",
                "reprehenderit",
                "tempore",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "maiores",
              bs: [
                "dolor",
                "beatae",
                "veritatis",
              ],
              n: "in",
              ns: [
                "omnis",
                "ipsum",
                "ex",
              ],
              s: "dolores",
              ss: [
                "vel",
              ],
            },
            rangeKeyElement: {
              b: "rerum",
              bs: [
                "voluptas",
                "quam",
              ],
              n: "reprehenderit",
              ns: [
                "qui",
              ],
              s: "unde",
              ss: [
                "autem",
                "qui",
              ],
            },
          },
        ],
      },
    },
  },
};

sdk.batchGetItem(req).then((res: BatchGetItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->