<!-- Start SDK Example Usage -->
```typescript
import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse
} from "openapi/dist/sdk/models/operations";
import {
  TypeHintEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchExecuteStatementRequest = {
  requestBody: {
    database: "corrupti",
    parameterSets: [
      [
        {
          name: "quibusdam",
          typeHint: TypeHintEnum.Date,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
                false,
              ],
              doubleValues: [
                4236.55,
                6235.64,
                6458.94,
                3843.82,
              ],
              longValues: [
                297534,
                891773,
              ],
              stringValues: [
                "delectus",
              ],
            },
            blobValue: "tempora",
            booleanValue: false,
            doubleValue: 3834.41,
            isNull: false,
            longValue: 477665,
            stringValue: "minus",
          },
        },
        {
          name: "placeat",
          typeHint: TypeHintEnum.Date,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
                false,
              ],
              doubleValues: [
                9255.97,
                8360.79,
              ],
              longValues: [
                337396,
              ],
              stringValues: [
                "deserunt",
              ],
            },
            blobValue: "perferendis",
            booleanValue: false,
            doubleValue: 3682.41,
            isNull: false,
            longValue: 832620,
            stringValue: "sapiente",
          },
        },
        {
          name: "quo",
          typeHint: TypeHintEnum.Json,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
                false,
                false,
              ],
              doubleValues: [
                4736.08,
                7991.59,
                8009.11,
                4614.79,
              ],
              longValues: [
                780529,
                678880,
                118274,
              ],
              stringValues: [
                "officia",
                "occaecati",
                "fugit",
              ],
            },
            blobValue: "deleniti",
            booleanValue: false,
            doubleValue: 9446.69,
            isNull: false,
            longValue: 758616,
            stringValue: "totam",
          },
        },
      ],
      [
        {
          name: "commodi",
          typeHint: TypeHintEnum.Timestamp,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
              ],
              booleanValues: [
                false,
              ],
              doubleValues: [
                7369.18,
                4561.5,
                2165.5,
                5684.34,
              ],
              longValues: [
                18789,
              ],
              stringValues: [
                "natus",
                "sed",
              ],
            },
            blobValue: "iste",
            booleanValue: false,
            doubleValue: 2223.21,
            isNull: false,
            longValue: 616934,
            stringValue: "laboriosam",
          },
        },
      ],
      [
        {
          name: "saepe",
          typeHint: TypeHintEnum.Time,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
              ],
              doubleValues: [
                4370.32,
                9023.49,
                6976.31,
              ],
              longValues: [
                60225,
              ],
              stringValues: [
                "est",
                "mollitia",
                "laborum",
                "dolores",
              ],
            },
            blobValue: "dolorem",
            booleanValue: false,
            doubleValue: 3581.52,
            isNull: false,
            longValue: 128926,
            stringValue: "nobis",
          },
        },
        {
          name: "enim",
          typeHint: TypeHintEnum.Date,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
              ],
              doubleValues: [
                384.25,
                4386.01,
                6342.74,
              ],
              longValues: [
                958950,
                102044,
                652790,
                208876,
              ],
              stringValues: [
                "consequuntur",
                "repellat",
                "mollitia",
              ],
            },
            blobValue: "occaecati",
            booleanValue: false,
            doubleValue: 2532.91,
            isNull: false,
            longValue: 414369,
            stringValue: "quam",
          },
        },
        {
          name: "molestiae",
          typeHint: TypeHintEnum.Uuid,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
                {},
              ],
              booleanValues: [
                false,
              ],
              doubleValues: [
                1103.75,
                6747.52,
              ],
              longValues: [
                317202,
                138183,
                778346,
              ],
              stringValues: [
                "tenetur",
              ],
            },
            blobValue: "ipsam",
            booleanValue: false,
            doubleValue: 6625.27,
            isNull: false,
            longValue: 820994,
            stringValue: "aut",
          },
        },
        {
          name: "quasi",
          typeHint: TypeHintEnum.Date,
          value: {
            arrayValue: {
              arrayValues: [
                {},
                {},
                {},
                {},
              ],
              booleanValues: [
                false,
                false,
                false,
              ],
              doubleValues: [
                9719.45,
              ],
              longValues: [
                878194,
                468651,
                509624,
                976762,
              ],
              stringValues: [
                "omnis",
              ],
            },
            blobValue: "voluptate",
            booleanValue: false,
            doubleValue: 7392.64,
            isNull: false,
            longValue: 19987,
            stringValue: "doloremque",
          },
        },
      ],
    ],
    resourceArn: "reprehenderit",
    schema: "ut",
    secretArn: "maiores",
    sql: "dicta",
    transactionId: "corporis",
  },
  xAmzAlgorithm: "dolore",
  xAmzContentSha256: "iusto",
  xAmzCredential: "dicta",
  xAmzDate: "harum",
  xAmzSecurityToken: "enim",
  xAmzSignature: "accusamus",
  xAmzSignedHeaders: "commodi",
};

sdk.batchExecuteStatement(req).then((res: BatchExecuteStatementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->