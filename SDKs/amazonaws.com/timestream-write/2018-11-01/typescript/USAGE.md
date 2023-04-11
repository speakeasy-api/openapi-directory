<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBatchLoadTaskRequest,
  CreateBatchLoadTaskResponse,
  CreateBatchLoadTaskXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  S3EncryptionOptionEnum,
  BatchLoadDataFormatEnum,
  TimeUnitEnum,
  ScalarMeasureValueTypeEnum,
  MeasureValueTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBatchLoadTaskRequest = {
  createBatchLoadTaskRequest: {
    clientToken: "corrupti",
    dataModelConfiguration: {
      dataModel: {
        dimensionMappings: [
          {
            destinationColumn: "distinctio",
            sourceColumn: "quibusdam",
          },
          {
            destinationColumn: "unde",
            sourceColumn: "nulla",
          },
          {
            destinationColumn: "corrupti",
            sourceColumn: "illum",
          },
        ],
        measureNameColumn: "vel",
        mixedMeasureMappings: [
          {
            measureName: "deserunt",
            measureValueType: MeasureValueTypeEnum.Varchar,
            multiMeasureAttributeMappings: [
              {
                measureValueType: ScalarMeasureValueTypeEnum.Bigint,
                sourceColumn: "debitis",
                targetMultiMeasureAttributeName: "ipsa",
              },
              {
                measureValueType: ScalarMeasureValueTypeEnum.Timestamp,
                sourceColumn: "tempora",
                targetMultiMeasureAttributeName: "suscipit",
              },
            ],
            sourceColumn: "molestiae",
            targetMeasureName: "minus",
          },
          {
            measureName: "placeat",
            measureValueType: MeasureValueTypeEnum.Boolean,
            multiMeasureAttributeMappings: [
              {
                measureValueType: ScalarMeasureValueTypeEnum.Boolean,
                sourceColumn: "nisi",
                targetMultiMeasureAttributeName: "recusandae",
              },
              {
                measureValueType: ScalarMeasureValueTypeEnum.Timestamp,
                sourceColumn: "ab",
                targetMultiMeasureAttributeName: "quis",
              },
            ],
            sourceColumn: "veritatis",
            targetMeasureName: "deserunt",
          },
          {
            measureName: "perferendis",
            measureValueType: MeasureValueTypeEnum.Varchar,
            multiMeasureAttributeMappings: [
              {
                measureValueType: ScalarMeasureValueTypeEnum.Timestamp,
                sourceColumn: "quo",
                targetMultiMeasureAttributeName: "odit",
              },
              {
                measureValueType: ScalarMeasureValueTypeEnum.Timestamp,
                sourceColumn: "at",
                targetMultiMeasureAttributeName: "maiores",
              },
              {
                measureValueType: ScalarMeasureValueTypeEnum.Boolean,
                sourceColumn: "quod",
                targetMultiMeasureAttributeName: "quod",
              },
              {
                measureValueType: ScalarMeasureValueTypeEnum.Boolean,
                sourceColumn: "totam",
                targetMultiMeasureAttributeName: "porro",
              },
            ],
            sourceColumn: "dolorum",
            targetMeasureName: "dicta",
          },
        ],
        multiMeasureMappings: {
          multiMeasureAttributeMappings: [
            {
              measureValueType: ScalarMeasureValueTypeEnum.Varchar,
              sourceColumn: "occaecati",
              targetMultiMeasureAttributeName: "fugit",
            },
            {
              measureValueType: ScalarMeasureValueTypeEnum.Boolean,
              sourceColumn: "hic",
              targetMultiMeasureAttributeName: "optio",
            },
            {
              measureValueType: ScalarMeasureValueTypeEnum.Boolean,
              sourceColumn: "beatae",
              targetMultiMeasureAttributeName: "commodi",
            },
          ],
          targetMultiMeasureName: "molestiae",
        },
        timeColumn: "modi",
        timeUnit: TimeUnitEnum.Milliseconds,
      },
      dataModelS3Configuration: {
        bucketName: "impedit",
        objectKey: "cum",
      },
    },
    dataSourceConfiguration: {
      csvConfiguration: {
        columnSeparator: "esse",
        escapeChar: "ipsum",
        nullValue: "excepturi",
        quoteChar: "aspernatur",
        trimWhiteSpace: false,
      },
      dataFormat: BatchLoadDataFormatEnum.Csv,
      dataSourceS3Configuration: {
        bucketName: "perferendis",
        objectKeyPrefix: "ad",
      },
    },
    recordVersion: 617636,
    reportConfiguration: {
      reportS3Configuration: {
        bucketName: "sed",
        encryptionOption: S3EncryptionOptionEnum.SseKms,
        kmsKeyId: "dolor",
        objectKeyPrefix: "natus",
      },
    },
    targetDatabaseName: "laboriosam",
    targetTableName: "hic",
  },
  xAmzAlgorithm: "saepe",
  xAmzContentSha256: "fuga",
  xAmzCredential: "in",
  xAmzDate: "corporis",
  xAmzSecurityToken: "iste",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "saepe",
  xAmzTarget: CreateBatchLoadTaskXAmzTargetEnum.Timestream20181101CreateBatchLoadTask,
};

sdk.createBatchLoadTask(req).then((res: CreateBatchLoadTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->