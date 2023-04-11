<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDeliveryStreamRequest,
  CreateDeliveryStreamResponse,
  CreateDeliveryStreamXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  NoEncryptionConfigEnum,
  CompressionFormatEnum,
  SplunkS3BackupModeEnum,
  ProcessorTypeEnum,
  ProcessorParameterNameEnum,
  HECEndpointTypeEnum,
  RedshiftS3BackupModeEnum,
  HttpEndpointS3BackupModeEnum,
  ContentEncodingEnum,
  S3BackupModeEnum,
  ParquetWriterVersionEnum,
  ParquetCompressionEnum,
  OrcFormatVersionEnum,
  OrcCompressionEnum,
  ElasticsearchS3BackupModeEnum,
  ElasticsearchIndexRotationPeriodEnum,
  DeliveryStreamTypeEnum,
  KeyTypeEnum,
  AmazonopensearchserviceS3BackupModeEnum,
  AmazonopensearchserviceIndexRotationPeriodEnum,
  AmazonOpenSearchServerlessS3BackupModeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDeliveryStreamRequest = {
  createDeliveryStreamInput: {
    amazonOpenSearchServerlessDestinationConfiguration: {
      bufferingHints: {
        intervalInSeconds: 548814,
        sizeInMBs: 592845,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "distinctio",
        logStreamName: "quibusdam",
      },
      collectionEndpoint: "unde",
      indexName: "nulla",
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "error",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "suscipit",
              },
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "magnam",
              },
              {
                parameterName: ProcessorParameterNameEnum.Delimiter,
                parameterValue: "ipsa",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "molestiae",
              },
              {
                parameterName: ProcessorParameterNameEnum.SubRecordType,
                parameterValue: "placeat",
              },
            ],
            type: ProcessorTypeEnum.MetadataExtraction,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "nisi",
              },
              {
                parameterName: ProcessorParameterNameEnum.Delimiter,
                parameterValue: "temporibus",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
        ],
      },
      retryOptions: {
        durationInSeconds: 337396,
      },
      roleARN: "veritatis",
      s3BackupMode: AmazonOpenSearchServerlessS3BackupModeEnum.AllDocuments,
      s3Configuration: {
        bucketARN: "perferendis",
        bufferingHints: {
          intervalInSeconds: 368241,
          sizeInMBs: 832620,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "sapiente",
          logStreamName: "quo",
        },
        compressionFormat: CompressionFormatEnum.Uncompressed,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "at",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "at",
        prefix: "maiores",
        roleARN: "molestiae",
      },
      vpcConfiguration: {
        roleARN: "quod",
        securityGroupIds: [
          "esse",
          "totam",
          "porro",
          "dolorum",
        ],
        subnetIds: [
          "nam",
        ],
      },
    },
    amazonopensearchserviceDestinationConfiguration: {
      bufferingHints: {
        intervalInSeconds: 639921,
        sizeInMBs: 582020,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "fugit",
        logStreamName: "deleniti",
      },
      clusterEndpoint: "hic",
      domainARN: "optio",
      indexName: "totam",
      indexRotationPeriod: AmazonopensearchserviceIndexRotationPeriodEnum.NoRotation,
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.MetadataExtractionQuery,
                parameterValue: "qui",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "cum",
              },
            ],
            type: ProcessorTypeEnum.Lambda,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "aspernatur",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
        ],
      },
      retryOptions: {
        durationInSeconds: 324141,
      },
      roleARN: "natus",
      s3BackupMode: AmazonopensearchserviceS3BackupModeEnum.FailedDocumentsOnly,
      s3Configuration: {
        bucketARN: "iste",
        bufferingHints: {
          intervalInSeconds: 222321,
          sizeInMBs: 616934,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "laboriosam",
          logStreamName: "hic",
        },
        compressionFormat: CompressionFormatEnum.HadoopSnappy,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "fuga",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "in",
        prefix: "corporis",
        roleARN: "iste",
      },
      typeName: "iure",
      vpcConfiguration: {
        roleARN: "saepe",
        securityGroupIds: [
          "architecto",
          "ipsa",
          "reiciendis",
        ],
        subnetIds: [
          "mollitia",
          "laborum",
          "dolores",
        ],
      },
    },
    deliveryStreamEncryptionConfigurationInput: {
      keyARN: "dolorem",
      keyType: KeyTypeEnum.AwsOwnedCmk,
    },
    deliveryStreamName: "explicabo",
    deliveryStreamType: DeliveryStreamTypeEnum.KinesisStreamAsSource,
    elasticsearchDestinationConfiguration: {
      bufferingHints: {
        intervalInSeconds: 315428,
        sizeInMBs: 607831,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "nemo",
        logStreamName: "minima",
      },
      clusterEndpoint: "excepturi",
      domainARN: "accusantium",
      indexName: "iure",
      indexRotationPeriod: ElasticsearchIndexRotationPeriodEnum.OneWeek,
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.LambdaArn,
                parameterValue: "mollitia",
              },
              {
                parameterName: ProcessorParameterNameEnum.NumberOfRetries,
                parameterValue: "culpa",
              },
              {
                parameterName: ProcessorParameterNameEnum.NumberOfRetries,
                parameterValue: "repellat",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "occaecati",
              },
            ],
            type: ProcessorTypeEnum.Lambda,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.RoleArn,
                parameterValue: "molestiae",
              },
              {
                parameterName: ProcessorParameterNameEnum.MetadataExtractionQuery,
                parameterValue: "error",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.LambdaArn,
                parameterValue: "laborum",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "enim",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.NumberOfRetries,
                parameterValue: "tenetur",
              },
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "id",
              },
              {
                parameterName: ProcessorParameterNameEnum.SubRecordType,
                parameterValue: "aut",
              },
              {
                parameterName: ProcessorParameterNameEnum.LambdaArn,
                parameterValue: "error",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
        ],
      },
      retryOptions: {
        durationInSeconds: 673660,
      },
      roleARN: "quasi",
      s3BackupMode: ElasticsearchS3BackupModeEnum.AllDocuments,
      s3Configuration: {
        bucketARN: "voluptatibus",
        bufferingHints: {
          intervalInSeconds: 878194,
          sizeInMBs: 468651,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "praesentium",
          logStreamName: "voluptatibus",
        },
        compressionFormat: CompressionFormatEnum.Uncompressed,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "omnis",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "voluptate",
        prefix: "cum",
        roleARN: "perferendis",
      },
      typeName: "doloremque",
      vpcConfiguration: {
        roleARN: "reprehenderit",
        securityGroupIds: [
          "maiores",
          "dicta",
        ],
        subnetIds: [
          "dolore",
          "iusto",
        ],
      },
    },
    extendedS3DestinationConfiguration: {
      bucketARN: "dicta",
      bufferingHints: {
        intervalInSeconds: 688661,
        sizeInMBs: 317983,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "accusamus",
        logStreamName: "commodi",
      },
      compressionFormat: CompressionFormatEnum.HadoopSnappy,
      dataFormatConversionConfiguration: {
        enabled: false,
        inputFormatConfiguration: {
          deserializer: {
            hiveJsonSerDe: {
              timestampFormats: [
                "ipsum",
              ],
            },
            openXJsonSerDe: {
              caseInsensitive: false,
              columnToJsonKeyMappings: {
                "molestias": "excepturi",
                "pariatur": "modi",
                "praesentium": "rem",
              },
              convertDotsInJsonKeysToUnderscores: false,
            },
          },
        },
        outputFormatConfiguration: {
          serializer: {
            orcSerDe: {
              blockSizeBytes: 916723,
              bloomFilterColumns: [
                "repudiandae",
              ],
              bloomFilterFalsePositiveProbability: 5759.47,
              compression: OrcCompressionEnum.None,
              dictionaryKeyThreshold: 9292.97,
              enablePadding: false,
              formatVersion: OrcFormatVersionEnum.V011,
              paddingTolerance: 3185.69,
              rowIndexStride: 9356,
              stripeSizeBytes: 667411,
            },
            parquetSerDe: {
              blockSizeBytes: 842342,
              compression: ParquetCompressionEnum.Uncompressed,
              enableDictionaryCompression: false,
              maxPaddingBytes: 647174,
              pageSizeBytes: 716327,
              writerVersion: ParquetWriterVersionEnum.V2,
            },
          },
        },
        schemaConfiguration: {
          catalogId: "labore",
          databaseName: "modi",
          region: "qui",
          roleARN: "aliquid",
          tableName: "cupiditate",
          versionId: "quos",
        },
      },
      dynamicPartitioningConfiguration: {
        enabled: false,
        retryOptions: {
          durationInSeconds: 20107,
        },
      },
      encryptionConfiguration: {
        kmsEncryptionConfig: {
          awskmsKeyARN: "magni",
        },
        noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
      },
      errorOutputPrefix: "assumenda",
      prefix: "ipsam",
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "excepturi",
              },
            ],
            type: ProcessorTypeEnum.Lambda,
          },
        ],
      },
      roleARN: "facilis",
      s3BackupConfiguration: {
        bucketARN: "tempore",
        bufferingHints: {
          intervalInSeconds: 288476,
          sizeInMBs: 962189,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "eum",
          logStreamName: "non",
        },
        compressionFormat: CompressionFormatEnum.Snappy,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "sint",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "aliquid",
        prefix: "provident",
        roleARN: "necessitatibus",
      },
      s3BackupMode: S3BackupModeEnum.Enabled,
    },
    httpEndpointDestinationConfiguration: {
      bufferingHints: {
        intervalInSeconds: 638921,
        sizeInMBs: 223081,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "debitis",
        logStreamName: "a",
      },
      endpointConfiguration: {
        accessKey: "dolorum",
        name: "in",
        url: "in",
      },
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "dicta",
              },
              {
                parameterName: ProcessorParameterNameEnum.MetadataExtractionQuery,
                parameterValue: "cumque",
              },
              {
                parameterName: ProcessorParameterNameEnum.SubRecordType,
                parameterValue: "ea",
              },
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "laborum",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "enim",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "provident",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "id",
              },
              {
                parameterName: ProcessorParameterNameEnum.RoleArn,
                parameterValue: "deleniti",
              },
              {
                parameterName: ProcessorParameterNameEnum.Delimiter,
                parameterValue: "amet",
              },
            ],
            type: ProcessorTypeEnum.MetadataExtraction,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "natus",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferSizeInMBs,
                parameterValue: "molestiae",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
        ],
      },
      requestConfiguration: {
        commonAttributes: [
          {
            attributeName: "magnam",
            attributeValue: "distinctio",
          },
          {
            attributeName: "id",
            attributeValue: "labore",
          },
        ],
        contentEncoding: ContentEncodingEnum.None,
      },
      retryOptions: {
        durationInSeconds: 383462,
      },
      roleARN: "natus",
      s3BackupMode: HttpEndpointS3BackupModeEnum.AllData,
      s3Configuration: {
        bucketARN: "eum",
        bufferingHints: {
          intervalInSeconds: 878453,
          sizeInMBs: 135474,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "architecto",
          logStreamName: "magnam",
        },
        compressionFormat: CompressionFormatEnum.Uncompressed,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "excepturi",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "ullam",
        prefix: "provident",
        roleARN: "quos",
      },
    },
    kinesisStreamSourceConfiguration: {
      kinesisStreamARN: "sint",
      roleARN: "accusantium",
    },
    redshiftDestinationConfiguration: {
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "mollitia",
        logStreamName: "reiciendis",
      },
      clusterJDBCURL: "mollitia",
      copyCommand: {
        copyOptions: "ad",
        dataTableColumns: "eum",
        dataTableName: "dolor",
      },
      password: "necessitatibus",
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.LambdaArn,
                parameterValue: "iure",
              },
              {
                parameterName: ProcessorParameterNameEnum.Delimiter,
                parameterValue: "debitis",
              },
            ],
            type: ProcessorTypeEnum.Lambda,
          },
        ],
      },
      retryOptions: {
        durationInSeconds: 806194,
      },
      roleARN: "deleniti",
      s3BackupConfiguration: {
        bucketARN: "facilis",
        bufferingHints: {
          intervalInSeconds: 447926,
          sizeInMBs: 100226,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "architecto",
          logStreamName: "repudiandae",
        },
        compressionFormat: CompressionFormatEnum.Gzip,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "expedita",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "nihil",
        prefix: "repellat",
        roleARN: "quibusdam",
      },
      s3BackupMode: RedshiftS3BackupModeEnum.Disabled,
      s3Configuration: {
        bucketARN: "saepe",
        bufferingHints: {
          intervalInSeconds: 868126,
          sizeInMBs: 37559,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "consequuntur",
          logStreamName: "praesentium",
        },
        compressionFormat: CompressionFormatEnum.Snappy,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "magni",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "sunt",
        prefix: "quo",
        roleARN: "illum",
      },
      username: "pariatur",
    },
    s3DestinationConfiguration: {
      bucketARN: "maxime",
      bufferingHints: {
        intervalInSeconds: 411397,
        sizeInMBs: 569101,
      },
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "odit",
        logStreamName: "ea",
      },
      compressionFormat: CompressionFormatEnum.Uncompressed,
      encryptionConfiguration: {
        kmsEncryptionConfig: {
          awskmsKeyARN: "ab",
        },
        noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
      },
      errorOutputPrefix: "maiores",
      prefix: "quidem",
      roleARN: "ipsam",
    },
    splunkDestinationConfiguration: {
      cloudWatchLoggingOptions: {
        enabled: false,
        logGroupName: "voluptate",
        logStreamName: "autem",
      },
      hecAcknowledgmentTimeoutInSeconds: 722056,
      hecEndpoint: "eaque",
      hecEndpointType: HECEndpointTypeEnum.Event,
      hecToken: "nemo",
      processingConfiguration: {
        enabled: false,
        processors: [
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.SubRecordType,
                parameterValue: "amet",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "hic",
              },
              {
                parameterName: ProcessorParameterNameEnum.BufferIntervalInSeconds,
                parameterValue: "nobis",
              },
              {
                parameterName: ProcessorParameterNameEnum.NumberOfRetries,
                parameterValue: "quis",
              },
              {
                parameterName: ProcessorParameterNameEnum.RoleArn,
                parameterValue: "dignissimos",
              },
            ],
            type: ProcessorTypeEnum.RecordDeAggregation,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.NumberOfRetries,
                parameterValue: "eos",
              },
              {
                parameterName: ProcessorParameterNameEnum.LambdaArn,
                parameterValue: "dolores",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
          {
            parameters: [
              {
                parameterName: ProcessorParameterNameEnum.MetadataExtractionQuery,
                parameterValue: "vero",
              },
              {
                parameterName: ProcessorParameterNameEnum.JsonParsingEngine,
                parameterValue: "hic",
              },
            ],
            type: ProcessorTypeEnum.AppendDelimiterToRecord,
          },
        ],
      },
      retryOptions: {
        durationInSeconds: 608253,
      },
      s3BackupMode: SplunkS3BackupModeEnum.AllEvents,
      s3Configuration: {
        bucketARN: "perspiciatis",
        bufferingHints: {
          intervalInSeconds: 31838,
          sizeInMBs: 783645,
        },
        cloudWatchLoggingOptions: {
          enabled: false,
          logGroupName: "consequuntur",
          logStreamName: "blanditiis",
        },
        compressionFormat: CompressionFormatEnum.Snappy,
        encryptionConfiguration: {
          kmsEncryptionConfig: {
            awskmsKeyARN: "eaque",
          },
          noEncryptionConfig: NoEncryptionConfigEnum.NoEncryption,
        },
        errorOutputPrefix: "occaecati",
        prefix: "rerum",
        roleARN: "adipisci",
      },
    },
    tags: [
      {
        key: "earum",
        value: "modi",
      },
      {
        key: "iste",
        value: "dolorum",
      },
      {
        key: "deleniti",
        value: "pariatur",
      },
      {
        key: "provident",
        value: "nobis",
      },
    ],
  },
  xAmzAlgorithm: "libero",
  xAmzContentSha256: "delectus",
  xAmzCredential: "quaerat",
  xAmzDate: "quos",
  xAmzSecurityToken: "aliquid",
  xAmzSignature: "dolorem",
  xAmzSignedHeaders: "dolorem",
  xAmzTarget: CreateDeliveryStreamXAmzTargetEnum.Firehose20150804CreateDeliveryStream,
};

sdk.createDeliveryStream(req).then((res: CreateDeliveryStreamResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->