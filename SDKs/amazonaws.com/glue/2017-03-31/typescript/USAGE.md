<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchCreatePartitionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSGlue.BatchCreatePartition",
  },
  request: {
    catalogId: "fugit",
    databaseName: "et",
    partitionInputList: [
      {
        lastAccessTime: "2004-06-02T10:14:12Z",
        lastAnalyzedTime: "1981-07-21T06:30:48Z",
        parameters: {
          "ut": "dolorem",
        },
        storageDescriptor: {
          bucketColumns: [
            "voluptate",
            "iste",
          ],
          columns: [
            {
              comment: "totam",
              name: "dolores",
              parameters: {
                "debitis": "vel",
                "odio": "dolore",
                "id": "aspernatur",
              },
              type: "accusantium",
            },
          ],
          compressed: false,
          inputFormat: "commodi",
          location: "quis",
          numberOfBuckets: 3398579248012586914,
          outputFormat: "aut",
          parameters: {
            "non": "voluptas",
            "omnis": "aut",
          },
          schemaReference: {
            schemaId: {
              registryName: "illo",
              schemaArn: "sed",
              schemaName: "officiis",
            },
            schemaVersionId: "autem",
            schemaVersionNumber: 8514850266767180993,
          },
          serdeInfo: {
            name: "nobis",
            parameters: {
              "qui": "recusandae",
            },
            serializationLibrary: "at",
          },
          skewedInfo: {
            skewedColumnNames: [
              "eveniet",
            ],
            skewedColumnValueLocationMaps: {
              "sint": "inventore",
              "ut": "exercitationem",
            },
            skewedColumnValues: [
              "reprehenderit",
              "tempore",
              "maiores",
            ],
          },
          sortColumns: [
            {
              column: "dolor",
              sortOrder: 7719717197379695442,
            },
            {
              column: "veritatis",
              sortOrder: 2671030200101705776,
            },
            {
              column: "et",
              sortOrder: 8565714761387219319,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "dolores",
        ],
      },
    ],
    tableName: "placeat",
  },
};

sdk.batchCreatePartition(req).then((res: BatchCreatePartitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->