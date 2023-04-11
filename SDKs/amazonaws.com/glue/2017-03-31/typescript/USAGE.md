<!-- Start SDK Example Usage -->
```typescript
import {
  BatchCreatePartitionRequest,
  BatchCreatePartitionResponse,
  BatchCreatePartitionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchCreatePartitionRequest = {
  batchCreatePartitionRequest: {
    catalogId: "corrupti",
    databaseName: "provident",
    partitionInputList: [
      {
        lastAccessTime: "2021-03-11T23:22:42.658Z",
        lastAnalyzedTime: "2021-05-14T08:28:11.899Z",
        parameters: {
          "vel": "error",
          "deserunt": "suscipit",
          "iure": "magnam",
          "debitis": "ipsa",
        },
        storageDescriptor: {
          additionalLocations: [
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
          ],
          bucketColumns: [
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
          ],
          columns: [
            {
              comment: "temporibus",
              name: "ab",
              parameters: {
                "veritatis": "deserunt",
                "perferendis": "ipsam",
              },
              type: "repellendus",
            },
            {
              comment: "sapiente",
              name: "quo",
              parameters: {
                "at": "at",
              },
              type: "maiores",
            },
            {
              comment: "molestiae",
              name: "quod",
              parameters: {
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
              },
              type: "fugit",
            },
            {
              comment: "deleniti",
              name: "hic",
              parameters: {
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
              },
              type: "esse",
            },
          ],
          compressed: false,
          inputFormat: "ipsum",
          location: "excepturi",
          numberOfBuckets: 135218,
          outputFormat: "perferendis",
          parameters: {
            "natus": "sed",
            "iste": "dolor",
          },
          schemaReference: {
            schemaId: {
              registryName: "natus",
              schemaArn: "laboriosam",
              schemaName: "hic",
            },
            schemaVersionId: "saepe",
            schemaVersionNumber: 681820,
          },
          serdeInfo: {
            name: "in",
            parameters: {
              "iste": "iure",
              "saepe": "quidem",
            },
            serializationLibrary: "architecto",
          },
          skewedInfo: {
            skewedColumnNames: [
              "reiciendis",
            ],
            skewedColumnValueLocationMaps: {
              "mollitia": "laborum",
              "dolores": "dolorem",
              "corporis": "explicabo",
            },
            skewedColumnValues: [
              "enim",
              "omnis",
              "nemo",
              "minima",
            ],
          },
          sortColumns: [
            {
              column: "accusantium",
              sortOrder: 438601,
            },
            {
              column: "culpa",
              sortOrder: 988374,
            },
            {
              column: "sapiente",
              sortOrder: 102044,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "dolorem",
          "culpa",
          "consequuntur",
        ],
      },
      {
        lastAccessTime: "2021-01-15T20:18:47.519Z",
        lastAnalyzedTime: "2022-06-30T02:19:51.375Z",
        parameters: {
          "quam": "molestiae",
          "velit": "error",
        },
        storageDescriptor: {
          additionalLocations: [
            "quis",
          ],
          bucketColumns: [
            "laborum",
          ],
          columns: [
            {
              comment: "enim",
              name: "odit",
              parameters: {
                "sequi": "tenetur",
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
              },
              type: "temporibus",
            },
            {
              comment: "laborum",
              name: "quasi",
              parameters: {
                "voluptatibus": "vero",
                "nihil": "praesentium",
                "voluptatibus": "ipsa",
                "omnis": "voluptate",
              },
              type: "cum",
            },
            {
              comment: "perferendis",
              name: "doloremque",
              parameters: {
                "ut": "maiores",
                "dicta": "corporis",
              },
              type: "dolore",
            },
          ],
          compressed: false,
          inputFormat: "iusto",
          location: "dicta",
          numberOfBuckets: 688661,
          outputFormat: "enim",
          parameters: {
            "commodi": "repudiandae",
            "quae": "ipsum",
            "quidem": "molestias",
            "excepturi": "pariatur",
          },
          schemaReference: {
            schemaId: {
              registryName: "modi",
              schemaArn: "praesentium",
              schemaName: "rem",
            },
            schemaVersionId: "voluptates",
            schemaVersionNumber: 93940,
          },
          serdeInfo: {
            name: "repudiandae",
            parameters: {
              "veritatis": "itaque",
              "incidunt": "enim",
              "consequatur": "est",
            },
            serializationLibrary: "quibusdam",
          },
          skewedInfo: {
            skewedColumnNames: [
              "deserunt",
            ],
            skewedColumnValueLocationMaps: {
              "quibusdam": "labore",
              "modi": "qui",
              "aliquid": "cupiditate",
            },
            skewedColumnValues: [
              "perferendis",
              "magni",
              "assumenda",
            ],
          },
          sortColumns: [
            {
              column: "alias",
              sortOrder: 146441,
            },
            {
              column: "dolorum",
              sortOrder: 569618,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "facilis",
          "tempore",
        ],
      },
      {
        lastAccessTime: "2022-01-14T19:13:42.009Z",
        lastAnalyzedTime: "2022-10-02T04:55:20.234Z",
        parameters: {
          "sint": "aliquid",
          "provident": "necessitatibus",
          "sint": "officia",
          "dolor": "debitis",
        },
        storageDescriptor: {
          additionalLocations: [
            "dolorum",
            "in",
            "in",
            "illum",
          ],
          bucketColumns: [
            "rerum",
            "dicta",
            "magnam",
            "cumque",
          ],
          columns: [
            {
              comment: "ea",
              name: "aliquid",
              parameters: {
                "accusamus": "non",
                "occaecati": "enim",
                "accusamus": "delectus",
              },
              type: "quidem",
            },
            {
              comment: "provident",
              name: "nam",
              parameters: {
                "blanditiis": "deleniti",
                "sapiente": "amet",
                "deserunt": "nisi",
              },
              type: "vel",
            },
            {
              comment: "natus",
              name: "omnis",
              parameters: {
                "perferendis": "nihil",
                "magnam": "distinctio",
              },
              type: "id",
            },
            {
              comment: "labore",
              name: "labore",
              parameters: {
                "natus": "nobis",
                "eum": "vero",
              },
              type: "aspernatur",
            },
          ],
          compressed: false,
          inputFormat: "architecto",
          location: "magnam",
          numberOfBuckets: 92373,
          outputFormat: "excepturi",
          parameters: {
            "provident": "quos",
            "sint": "accusantium",
          },
          schemaReference: {
            schemaId: {
              registryName: "mollitia",
              schemaArn: "reiciendis",
              schemaName: "mollitia",
            },
            schemaVersionId: "ad",
            schemaVersionNumber: 431418,
          },
          serdeInfo: {
            name: "dolor",
            parameters: {
              "odit": "nemo",
              "quasi": "iure",
              "doloribus": "debitis",
              "eius": "maxime",
            },
            serializationLibrary: "deleniti",
          },
          skewedInfo: {
            skewedColumnNames: [
              "in",
              "architecto",
              "architecto",
            ],
            skewedColumnValueLocationMaps: {
              "ullam": "expedita",
              "nihil": "repellat",
              "quibusdam": "sed",
              "saepe": "pariatur",
            },
            skewedColumnValues: [
              "consequuntur",
            ],
          },
          sortColumns: [
            {
              column: "natus",
              sortOrder: 166847,
            },
            {
              column: "sunt",
              sortOrder: 779051,
            },
            {
              column: "illum",
              sortOrder: 864934,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "ea",
          "excepturi",
          "odit",
          "ea",
        ],
      },
    ],
    tableName: "accusantium",
  },
  xAmzAlgorithm: "ab",
  xAmzContentSha256: "maiores",
  xAmzCredential: "quidem",
  xAmzDate: "ipsam",
  xAmzSecurityToken: "voluptate",
  xAmzSignature: "autem",
  xAmzSignedHeaders: "nam",
  xAmzTarget: BatchCreatePartitionXAmzTargetEnum.AWSGlueBatchCreatePartition,
};

sdk.batchCreatePartition(req).then((res: BatchCreatePartitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->