<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateDeliveryStreamRequest{
        Headers: operations.CreateDeliveryStreamHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
        },
        Request: shared.CreateDeliveryStreamInput{
            AmazonOpenSearchServerlessDestinationConfiguration: &shared.AmazonOpenSearchServerlessDestinationConfiguration{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: 847252,
                    SizeInMBs: 423655,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "error",
                    LogStreamName: "deserunt",
                },
                CollectionEndpoint: "suscipit",
                IndexName: "iure",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "delectus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "suscipit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "minus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "voluptatum",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "recusandae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "ab",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "veritatis",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: 20218,
                },
                RoleARN: "ipsam",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "sapiente",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 778157,
                        SizeInMBs: 140350,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "at",
                        LogStreamName: "at",
                    },
                    CompressionFormat: "HADOOP_SNAPPY",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "molestiae",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "quod",
                    Prefix: "quod",
                    RoleARN: "esse",
                },
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "totam",
                    SecurityGroupIds: []string{
                        "dolorum",
                        "dicta",
                        "nam",
                        "officia",
                    },
                    SubnetIds: []string{
                        "fugit",
                        "deleniti",
                        "hic",
                    },
                },
            },
            AmazonopensearchserviceDestinationConfiguration: &shared.AmazonopensearchserviceDestinationConfiguration{
                BufferingHints: &shared.AmazonopensearchserviceBufferingHints{
                    IntervalInSeconds: 758616,
                    SizeInMBs: 521848,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "beatae",
                    LogStreamName: "commodi",
                },
                ClusterEndpoint: "molestiae",
                DomainARN: "modi",
                IndexName: "qui",
                IndexRotationPeriod: "OneWeek",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "excepturi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "perferendis",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "iste",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "natus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "hic",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "corporis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "iure",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "quidem",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: 60225,
                },
                RoleARN: "reiciendis",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "mollitia",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 670638,
                        SizeInMBs: 170909,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "dolorem",
                        LogStreamName: "corporis",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "nobis",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "enim",
                    Prefix: "omnis",
                    RoleARN: "nemo",
                },
                TypeName: "minima",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "excepturi",
                    SecurityGroupIds: []string{
                        "iure",
                    },
                    SubnetIds: []string{
                        "doloribus",
                        "sapiente",
                        "architecto",
                    },
                },
            },
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: "mollitia",
                KeyType: "AWS_OWNED_CMK",
            },
            DeliveryStreamName: "culpa",
            DeliveryStreamType: "DirectPut",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 995300,
                    SizeInMBs: 653108,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "occaecati",
                    LogStreamName: "numquam",
                },
                ClusterEndpoint: "commodi",
                DomainARN: "quam",
                IndexName: "molestiae",
                IndexRotationPeriod: "OneHour",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "vitae",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "odit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "sequi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "ipsam",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "quasi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "temporibus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "quasi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "voluptatibus",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 468651,
                },
                RoleARN: "praesentium",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "ipsa",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 604846,
                        SizeInMBs: 451159,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "cum",
                        LogStreamName: "perferendis",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "reprehenderit",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "ut",
                    Prefix: "maiores",
                    RoleARN: "dicta",
                },
                TypeName: "corporis",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "dolore",
                    SecurityGroupIds: []string{
                        "dicta",
                        "harum",
                    },
                    SubnetIds: []string{
                        "accusamus",
                        "commodi",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "repudiandae",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 64147,
                    SizeInMBs: 216822,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "quidem",
                    LogStreamName: "molestias",
                },
                CompressionFormat: "ZIP",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: false,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "modi",
                                    "praesentium",
                                    "rem",
                                    "voluptates",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: false,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "repudiandae": "sint",
                                },
                                ConvertDotsInJSONKeysToUnderscores: false,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 83112,
                                BloomFilterColumns: []string{
                                    "incidunt",
                                    "enim",
                                    "consequatur",
                                    "est",
                                },
                                BloomFilterFalsePositiveProbability: 8423.42,
                                Compression: "NONE",
                                DictionaryKeyThreshold: 6471.74,
                                EnablePadding: false,
                                FormatVersion: "V0_12",
                                PaddingTolerance: 8413.86,
                                RowIndexStride: 289406,
                                StripeSizeBytes: 264730,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 183191,
                                Compression: "GZIP",
                                EnableDictionaryCompression: false,
                                MaxPaddingBytes: 586513,
                                PageSizeBytes: 552822,
                                WriterVersion: "V1",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "magni",
                        DatabaseName: "assumenda",
                        Region: "ipsam",
                        RoleARN: "alias",
                        TableName: "fugit",
                        VersionID: "dolorum",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: false,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 569618,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "tempora",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "facilis",
                Prefix: "tempore",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "non",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "sint",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "provident",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "sint",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "a",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RoleARN: "in",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "in",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 846409,
                        SizeInMBs: 978571,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "rerum",
                        LogStreamName: "dicta",
                    },
                    CompressionFormat: "GZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "cumque",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "facere",
                    Prefix: "ea",
                    RoleARN: "aliquid",
                },
                S3BackupMode: "Enabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 881104,
                    SizeInMBs: 249796,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "occaecati",
                    LogStreamName: "enim",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "accusamus",
                    Name: "delectus",
                    URL: "quidem",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "blanditiis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "sapiente",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "deserunt",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "omnis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "perferendis",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "labore",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "nobis",
                            AttributeValue: "eum",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "vero",
                            AttributeValue: "aspernatur",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "architecto",
                            AttributeValue: "magnam",
                        },
                    },
                    ContentEncoding: "NONE",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 569965,
                },
                RoleARN: "ullam",
                S3BackupMode: "AllData",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "quos",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 574325,
                        SizeInMBs: 33625,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "mollitia",
                        LogStreamName: "reiciendis",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ad",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "eum",
                    Prefix: "dolor",
                    RoleARN: "necessitatibus",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "odit",
                RoleARN: "nemo",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "quasi",
                    LogStreamName: "iure",
                },
                ClusterJDBCURL: "doloribus",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "debitis",
                    DataTableColumns: "eius",
                    DataTableName: "maxime",
                },
                Password: "deleniti",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "architecto",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "ullam",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "quibusdam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "saepe",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "praesentium",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: 166847,
                },
                RoleARN: "sunt",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "quo",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 848009,
                        SizeInMBs: 864934,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "maxime",
                        LogStreamName: "ea",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "odit",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "ea",
                    Prefix: "accusantium",
                    RoleARN: "ab",
                },
                S3BackupMode: "Enabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "quidem",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 373291,
                        SizeInMBs: 453543,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "autem",
                        LogStreamName: "nam",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "pariatur",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "nemo",
                    Prefix: "voluptatibus",
                    RoleARN: "perferendis",
                },
                Username: "fugiat",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "amet",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 11714,
                    SizeInMBs: 764912,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "corporis",
                    LogStreamName: "hic",
                },
                CompressionFormat: "Snappy",
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "nobis",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "dolores",
                Prefix: "quis",
                RoleARN: "totam",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "dignissimos",
                    LogStreamName: "eaque",
                },
                HECAcknowledgmentTimeoutInSeconds: 338985,
                HECEndpoint: "nesciunt",
                HECEndpointType: "Raw",
                HECToken: "perferendis",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "dolor",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "nostrum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "recusandae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "facilis",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 31838,
                },
                S3BackupMode: "AllEvents",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "consequuntur",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 500026,
                        SizeInMBs: 621479,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "eaque",
                        LogStreamName: "occaecati",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "adipisci",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "asperiores",
                    Prefix: "earum",
                    RoleARN: "modi",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "pariatur",
                    Value: "provident",
                },
                shared.Tag{
                    Key: "nobis",
                    Value: "libero",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeliveryStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeliveryStreamOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->