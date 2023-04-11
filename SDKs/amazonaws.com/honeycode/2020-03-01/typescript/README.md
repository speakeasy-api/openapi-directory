# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/honeycode/2020-03-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/honeycode/2020-03-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchCreateTableRows` - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* `batchDeleteTableRows` -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* `batchUpdateTableRows` - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `batchUpsertTableRows` - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `describeTableDataImportJob` -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* `getScreenData` -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* `invokeScreenAutomation` -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* `listTableColumns` -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* `listTableRows` -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* `listTables` -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* `listTagsForResource` -  The ListTagsForResource API allows you to return a resource's tags. 
* `queryTableRows` -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* `startTableDataImportJob` -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* `tagResource` -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* `untagResource` -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

