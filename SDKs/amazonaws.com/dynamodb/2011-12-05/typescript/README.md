# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dynamodb/2011-12-05/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dynamodb/2011-12-05/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchGetItem` - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* `batchWriteItem` - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* `createTable` - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* `deleteItem` - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* `deleteTable` - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `describeTable` - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `getItem` - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* `listTables` - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* `putItem` - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* `query` - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* `scan` - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* `updateItem` - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* `updateTable` - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

