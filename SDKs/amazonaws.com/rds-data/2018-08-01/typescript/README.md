# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds-data/2018-08-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds-data/2018-08-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* `beginTransaction` - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* `commitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `executeSql` - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
* `executeStatement` - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* `rollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

