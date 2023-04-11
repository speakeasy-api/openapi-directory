<!-- Start SDK Example Usage -->
```typescript
import {
  AddLFTagsToResourceRequest,
  AddLFTagsToResourceResponse
} from "openapi/dist/sdk/models/operations";
import {
  ResourceTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddLFTagsToResourceRequest = {
  requestBody: {
    catalogId: "corrupti",
    lfTags: [
      {
        catalogId: "distinctio",
        tagKey: "quibusdam",
        tagValues: [
          "nulla",
          "corrupti",
          "illum",
        ],
      },
      {
        catalogId: "vel",
        tagKey: "error",
        tagValues: [
          "suscipit",
          "iure",
          "magnam",
        ],
      },
      {
        catalogId: "debitis",
        tagKey: "ipsa",
        tagValues: [
          "tempora",
          "suscipit",
          "molestiae",
          "minus",
        ],
      },
    ],
    resource: {
      catalog: {
        "voluptatum": "iusto",
        "excepturi": "nisi",
        "recusandae": "temporibus",
        "ab": "quis",
      },
      dataCellsFilter: {
        databaseName: "veritatis",
        name: "deserunt",
        tableCatalogId: "perferendis",
        tableName: "ipsam",
      },
      dataLocation: {
        catalogId: "repellendus",
        resourceArn: "sapiente",
      },
      database: {
        catalogId: "quo",
        name: "odit",
      },
      lfTag: {
        catalogId: "at",
        tagKey: "at",
        tagValues: [
          "molestiae",
          "quod",
          "quod",
          "esse",
        ],
      },
      lfTagPolicy: {
        catalogId: "totam",
        expression: [
          {
            tagKey: "dolorum",
            tagValues: [
              "nam",
            ],
          },
          {
            tagKey: "officia",
            tagValues: [
              "fugit",
              "deleniti",
              "hic",
            ],
          },
          {
            tagKey: "optio",
            tagValues: [
              "beatae",
              "commodi",
              "molestiae",
            ],
          },
          {
            tagKey: "modi",
            tagValues: [
              "impedit",
            ],
          },
        ],
        resourceType: ResourceTypeEnum.Table,
      },
      table: {
        catalogId: "esse",
        databaseName: "ipsum",
        name: "excepturi",
        tableWildcard: {
          "perferendis": "ad",
        },
      },
      tableWithColumns: {
        catalogId: "natus",
        columnNames: [
          "iste",
        ],
        columnWildcard: {
          excludedColumnNames: [
            "natus",
          ],
        },
        databaseName: "laboriosam",
        name: "hic",
      },
    },
  },
  xAmzAlgorithm: "saepe",
  xAmzContentSha256: "fuga",
  xAmzCredential: "in",
  xAmzDate: "corporis",
  xAmzSecurityToken: "iste",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "saepe",
};

sdk.addLFTagsToResource(req).then((res: AddLFTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->