# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/firehose/2015-08-04/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/firehose/2015-08-04/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDeliveryStream` - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* `deleteDeliveryStream` - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* `describeDeliveryStream` - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* `listDeliveryStreams` - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* `listTagsForDeliveryStream` - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* `putRecord` - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `putRecordBatch` - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `startDeliveryStreamEncryption` - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `stopDeliveryStreamEncryption` - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `tagDeliveryStream` - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* `untagDeliveryStream` - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* `updateDestination` - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

