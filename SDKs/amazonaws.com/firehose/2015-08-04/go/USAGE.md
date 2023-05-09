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