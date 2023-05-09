# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/firehose/2015-08-04/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateDeliveryStream(ctx, operations.CreateDeliveryStreamRequest{
        CreateDeliveryStreamInput: shared.CreateDeliveryStreamInput{
            AmazonOpenSearchServerlessDestinationConfiguration: &shared.AmazonOpenSearchServerlessDestinationConfiguration{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: sdk.Int64(548814),
                    SizeInMBs: sdk.Int64(592845),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("distinctio"),
                    LogStreamName: sdk.String("quibusdam"),
                },
                CollectionEndpoint: sdk.String("unde"),
                IndexName: "nulla",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "error",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "suscipit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "magnam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "ipsa",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "molestiae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "placeat",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "nisi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "temporibus",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: sdk.Int64(337396),
                },
                RoleARN: "veritatis",
                S3BackupMode: shared.AmazonOpenSearchServerlessS3BackupModeEnumAllDocuments.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "perferendis",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(368241),
                        SizeInMBs: sdk.Int64(832620),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("sapiente"),
                        LogStreamName: sdk.String("quo"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "at",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("at"),
                    Prefix: sdk.String("maiores"),
                    RoleARN: "molestiae",
                },
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "quod",
                    SecurityGroupIds: []string{
                        "esse",
                        "totam",
                        "porro",
                        "dolorum",
                    },
                    SubnetIds: []string{
                        "nam",
                    },
                },
            },
            AmazonopensearchserviceDestinationConfiguration: &shared.AmazonopensearchserviceDestinationConfiguration{
                BufferingHints: &shared.AmazonopensearchserviceBufferingHints{
                    IntervalInSeconds: sdk.Int64(639921),
                    SizeInMBs: sdk.Int64(582020),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("fugit"),
                    LogStreamName: sdk.String("deleniti"),
                },
                ClusterEndpoint: sdk.String("hic"),
                DomainARN: sdk.String("optio"),
                IndexName: "totam",
                IndexRotationPeriod: shared.AmazonopensearchserviceIndexRotationPeriodEnumNoRotation.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "qui",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "cum",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "aspernatur",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: sdk.Int64(324141),
                },
                RoleARN: "natus",
                S3BackupMode: shared.AmazonopensearchserviceS3BackupModeEnumFailedDocumentsOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "iste",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(222321),
                        SizeInMBs: sdk.Int64(616934),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("laboriosam"),
                        LogStreamName: sdk.String("hic"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "fuga",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("in"),
                    Prefix: sdk.String("corporis"),
                    RoleARN: "iste",
                },
                TypeName: sdk.String("iure"),
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "saepe",
                    SecurityGroupIds: []string{
                        "architecto",
                        "ipsa",
                        "reiciendis",
                    },
                    SubnetIds: []string{
                        "mollitia",
                        "laborum",
                        "dolores",
                    },
                },
            },
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: sdk.String("dolorem"),
                KeyType: shared.KeyTypeEnumAwsOwnedCmk,
            },
            DeliveryStreamName: "explicabo",
            DeliveryStreamType: shared.DeliveryStreamTypeEnumKinesisStreamAsSource.ToPointer(),
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: sdk.Int64(315428),
                    SizeInMBs: sdk.Int64(607831),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("nemo"),
                    LogStreamName: sdk.String("minima"),
                },
                ClusterEndpoint: sdk.String("excepturi"),
                DomainARN: sdk.String("accusantium"),
                IndexName: "iure",
                IndexRotationPeriod: shared.ElasticsearchIndexRotationPeriodEnumOneWeek.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "mollitia",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "culpa",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "repellat",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "occaecati",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "molestiae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "error",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "laborum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "enim",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "tenetur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "aut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "error",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: sdk.Int64(673660),
                },
                RoleARN: "quasi",
                S3BackupMode: shared.ElasticsearchS3BackupModeEnumAllDocuments.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "voluptatibus",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(878194),
                        SizeInMBs: sdk.Int64(468651),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("praesentium"),
                        LogStreamName: sdk.String("voluptatibus"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "omnis",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("voluptate"),
                    Prefix: sdk.String("cum"),
                    RoleARN: "perferendis",
                },
                TypeName: sdk.String("doloremque"),
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "reprehenderit",
                    SecurityGroupIds: []string{
                        "maiores",
                        "dicta",
                    },
                    SubnetIds: []string{
                        "dolore",
                        "iusto",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "dicta",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(688661),
                    SizeInMBs: sdk.Int64(317983),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("accusamus"),
                    LogStreamName: sdk.String("commodi"),
                },
                CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: sdk.Bool(false),
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "ipsum",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: sdk.Bool(false),
                                ColumnToJSONKeyMappings: map[string]string{
                                    "molestias": "excepturi",
                                    "pariatur": "modi",
                                    "praesentium": "rem",
                                },
                                ConvertDotsInJSONKeysToUnderscores: sdk.Bool(false),
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: sdk.Int64(916723),
                                BloomFilterColumns: []string{
                                    "repudiandae",
                                },
                                BloomFilterFalsePositiveProbability: sdk.Float64(5759.47),
                                Compression: shared.OrcCompressionEnumNone.ToPointer(),
                                DictionaryKeyThreshold: sdk.Float64(9292.97),
                                EnablePadding: sdk.Bool(false),
                                FormatVersion: shared.OrcFormatVersionEnumV011.ToPointer(),
                                PaddingTolerance: sdk.Float64(3185.69),
                                RowIndexStride: sdk.Int64(9356),
                                StripeSizeBytes: sdk.Int64(667411),
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: sdk.Int64(842342),
                                Compression: shared.ParquetCompressionEnumUncompressed.ToPointer(),
                                EnableDictionaryCompression: sdk.Bool(false),
                                MaxPaddingBytes: sdk.Int64(647174),
                                PageSizeBytes: sdk.Int64(716327),
                                WriterVersion: shared.ParquetWriterVersionEnumV2.ToPointer(),
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: sdk.String("labore"),
                        DatabaseName: sdk.String("modi"),
                        Region: sdk.String("qui"),
                        RoleARN: sdk.String("aliquid"),
                        TableName: sdk.String("cupiditate"),
                        VersionID: sdk.String("quos"),
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: sdk.Bool(false),
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: sdk.Int64(20107),
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "magni",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("assumenda"),
                Prefix: sdk.String("ipsam"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "excepturi",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RoleARN: "facilis",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "tempore",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(288476),
                        SizeInMBs: sdk.Int64(962189),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("eum"),
                        LogStreamName: sdk.String("non"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "sint",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("aliquid"),
                    Prefix: sdk.String("provident"),
                    RoleARN: "necessitatibus",
                },
                S3BackupMode: shared.S3BackupModeEnumEnabled.ToPointer(),
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: sdk.Int64(638921),
                    SizeInMBs: sdk.Int64(223081),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("debitis"),
                    LogStreamName: sdk.String("a"),
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: sdk.String("dolorum"),
                    Name: sdk.String("Arlene Stamm"),
                    URL: "dicta",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "ea",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "laborum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "non",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "enim",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "provident",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "deleniti",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "amet",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "vel",
                            AttributeValue: "natus",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "omnis",
                            AttributeValue: "molestiae",
                        },
                    },
                    ContentEncoding: shared.ContentEncodingEnumNone.ToPointer(),
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: sdk.Int64(470132),
                },
                RoleARN: sdk.String("magnam"),
                S3BackupMode: shared.HTTPEndpointS3BackupModeEnumAllData.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "id",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(287991),
                        SizeInMBs: sdk.Int64(290077),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("suscipit"),
                        LogStreamName: sdk.String("natus"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "eum",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("vero"),
                    Prefix: sdk.String("aspernatur"),
                    RoleARN: "architecto",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "magnam",
                RoleARN: "et",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("excepturi"),
                    LogStreamName: sdk.String("ullam"),
                },
                ClusterJDBCURL: "provident",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: sdk.String("quos"),
                    DataTableColumns: sdk.String("sint"),
                    DataTableName: "accusantium",
                },
                Password: "mollitia",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "eum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "necessitatibus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "nemo",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "debitis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "maxime",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "architecto",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "repudiandae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "expedita",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "sed",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "pariatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "consequuntur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "natus",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: sdk.Int64(123820),
                },
                RoleARN: "quo",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "illum",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(864934),
                        SizeInMBs: sdk.Int64(807319),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("ea"),
                        LogStreamName: sdk.String("excepturi"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ea",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("accusantium"),
                    Prefix: sdk.String("ab"),
                    RoleARN: "maiores",
                },
                S3BackupMode: shared.RedshiftS3BackupModeEnumEnabled.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "ipsam",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(453543),
                        SizeInMBs: sdk.Int64(420075),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("nam"),
                        LogStreamName: sdk.String("eaque"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "nemo",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("voluptatibus"),
                    Prefix: sdk.String("perferendis"),
                    RoleARN: "fugiat",
                },
                Username: "amet",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "aut",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(764912),
                    SizeInMBs: sdk.Int64(359978),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("hic"),
                    LogStreamName: sdk.String("libero"),
                },
                CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "dolores",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("quis"),
                Prefix: sdk.String("totam"),
                RoleARN: "dignissimos",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("eaque"),
                    LogStreamName: sdk.String("quis"),
                },
                HECAcknowledgmentTimeoutInSeconds: sdk.Int64(199996),
                HECEndpoint: "eos",
                HECEndpointType: shared.HECEndpointTypeEnumRaw,
                HECToken: "dolores",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "vero",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "hic",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "perspiciatis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "porro",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "blanditiis",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "rerum",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "modi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "dolorum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "pariatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "nobis",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: sdk.Int64(964490),
                },
                S3BackupMode: shared.SplunkS3BackupModeEnumFailedEventsOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "quos",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(398221),
                        SizeInMBs: sdk.Int64(212390),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("dolorem"),
                        LogStreamName: sdk.String("dolor"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ipsum",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("hic"),
                    Prefix: sdk.String("excepturi"),
                    RoleARN: "cum",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dignissimos",
                    Value: sdk.String("reiciendis"),
                },
                shared.Tag{
                    Key: "amet",
                    Value: sdk.String("dolorum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.CreateDeliveryStreamXAmzTargetEnumFirehose20150804CreateDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeliveryStreamOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateDeliveryStream](docs/sdk/README.md#createdeliverystream) - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* [DeleteDeliveryStream](docs/sdk/README.md#deletedeliverystream) - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* [DescribeDeliveryStream](docs/sdk/README.md#describedeliverystream) - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* [ListDeliveryStreams](docs/sdk/README.md#listdeliverystreams) - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* [ListTagsForDeliveryStream](docs/sdk/README.md#listtagsfordeliverystream) - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* [PutRecord](docs/sdk/README.md#putrecord) - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [PutRecordBatch](docs/sdk/README.md#putrecordbatch) - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [StartDeliveryStreamEncryption](docs/sdk/README.md#startdeliverystreamencryption) - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [StopDeliveryStreamEncryption](docs/sdk/README.md#stopdeliverystreamencryption) - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [TagDeliveryStream](docs/sdk/README.md#tagdeliverystream) - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* [UntagDeliveryStream](docs/sdk/README.md#untagdeliverystream) - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* [UpdateDestination](docs/sdk/README.md#updatedestination) - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
