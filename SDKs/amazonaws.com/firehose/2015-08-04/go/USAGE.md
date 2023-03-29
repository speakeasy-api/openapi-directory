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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
        },
        Request: shared.CreateDeliveryStreamInput{
            AmazonOpenSearchServerlessDestinationConfiguration: &shared.AmazonOpenSearchServerlessDestinationConfiguration{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: 423655,
                    SizeInMBs: 623564,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "facilis",
                    LogStreamName: "eum",
                },
                CollectionEndpoint: "iusto",
                IndexName: "ullam",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "enim",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "vel",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "deleniti",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "quo",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "laboriosam",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "consequatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "a",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "eos",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: 870088,
                },
                RoleARN: "reiciendis",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "quibusdam",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 800911,
                        SizeInMBs: 461479,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "occaecati",
                        LogStreamName: "dolor",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "sed",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "rerum",
                    Prefix: "culpa",
                    RoleARN: "qui",
                },
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "sed",
                    SecurityGroupIds: []string{
                        "possimus",
                        "occaecati",
                        "odit",
                        "esse",
                    },
                    SubnetIds: []string{
                        "voluptatem",
                        "amet",
                    },
                },
            },
            AmazonopensearchserviceDestinationConfiguration: &shared.AmazonopensearchserviceDestinationConfiguration{
                BufferingHints: &shared.AmazonopensearchserviceBufferingHints{
                    IntervalInSeconds: 774234,
                    SizeInMBs: 736918,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "blanditiis",
                    LogStreamName: "numquam",
                },
                ClusterEndpoint: "similique",
                DomainARN: "dolores",
                IndexName: "sit",
                IndexRotationPeriod: "OneHour",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "modi",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "ut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "qui",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "ut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "aspernatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "ut",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: 653140,
                },
                RoleARN: "libero",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "non",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 358152,
                        SizeInMBs: 128926,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "placeat",
                        LogStreamName: "ipsam",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "commodi",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "similique",
                    Prefix: "eaque",
                    RoleARN: "odio",
                },
                TypeName: "harum",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "doloribus",
                    SecurityGroupIds: []string{
                        "aut",
                        "et",
                        "non",
                        "quidem",
                    },
                    SubnetIds: []string{
                        "asperiores",
                    },
                },
            },
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: "et",
                KeyType: "CUSTOMER_MANAGED_CMK",
            },
            DeliveryStreamName: "aliquam",
            DeliveryStreamType: "DirectPut",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 466311,
                    SizeInMBs: 474697,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "et",
                    LogStreamName: "fuga",
                },
                ClusterEndpoint: "nesciunt",
                DomainARN: "laboriosam",
                IndexName: "aut",
                IndexRotationPeriod: "OneWeek",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "omnis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "hic",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "perferendis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "fuga",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "tempore",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "debitis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "molestias",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "illo",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "qui",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 19987,
                },
                RoleARN: "eaque",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "veniam",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 979587,
                        SizeInMBs: 120196,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "ea",
                        LogStreamName: "exercitationem",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "sed",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "voluptatem",
                    Prefix: "aut",
                    RoleARN: "esse",
                },
                TypeName: "sint",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "veritatis",
                    SecurityGroupIds: []string{
                        "eligendi",
                    },
                    SubnetIds: []string{
                        "similique",
                        "et",
                        "ut",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "molestias",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 523248,
                    SizeInMBs: 916723,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "explicabo",
                    LogStreamName: "et",
                },
                CompressionFormat: "ZIP",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: false,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "non",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: false,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "voluptatem": "aut",
                                    "libero": "voluptas",
                                },
                                ConvertDotsInJSONKeysToUnderscores: false,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 131797,
                                BloomFilterColumns: []string{
                                    "porro",
                                    "voluptas",
                                    "nostrum",
                                },
                                BloomFilterFalsePositiveProbability: 2647.3,
                                Compression: "NONE",
                                DictionaryKeyThreshold: 3978.21,
                                EnablePadding: false,
                                FormatVersion: "V0_12",
                                PaddingTolerance: 5528.22,
                                RowIndexStride: 20107,
                                StripeSizeBytes: 164940,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 828940,
                                Compression: "GZIP",
                                EnableDictionaryCompression: false,
                                MaxPaddingBytes: 4695,
                                PageSizeBytes: 146441,
                                WriterVersion: "V2",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "similique",
                        DatabaseName: "enim",
                        Region: "nihil",
                        RoleARN: "id",
                        TableName: "quis",
                        VersionID: "sapiente",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: false,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 433288,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "dolore",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "in",
                Prefix: "qui",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "rerum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "necessitatibus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "soluta",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "ducimus",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "fugit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "voluptas",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "velit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "cum",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "enim",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RoleARN: "delectus",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "eligendi",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 588465,
                        SizeInMBs: 725255,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "distinctio",
                        LogStreamName: "et",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "a",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "facilis",
                    Prefix: "qui",
                    RoleARN: "nihil",
                },
                S3BackupMode: "Enabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 606393,
                    SizeInMBs: 474867,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "sit",
                    LogStreamName: "rem",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "corporis",
                    Name: "porro",
                    URL: "distinctio",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "et",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "molestiae",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "ullam",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "ex",
                            AttributeValue: "deserunt",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "omnis",
                            AttributeValue: "in",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "aperiam",
                            AttributeValue: "et",
                        },
                    },
                    ContentEncoding: "GZIP",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 652103,
                },
                RoleARN: "voluptatem",
                S3BackupMode: "FailedDataOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "modi",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 896547,
                        SizeInMBs: 141264,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "consequatur",
                        LogStreamName: "aspernatur",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "maiores",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "quaerat",
                    Prefix: "aut",
                    RoleARN: "sed",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "nihil",
                RoleARN: "ducimus",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "aspernatur",
                    LogStreamName: "aspernatur",
                },
                ClusterJDBCURL: "sint",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "aliquid",
                    DataTableColumns: "quo",
                    DataTableName: "totam",
                },
                Password: "repellat",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "accusamus",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "et",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "pariatur",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "similique",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "voluptate",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "quasi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "optio",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: 453543,
                },
                RoleARN: "quam",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "quisquam",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 50588,
                        SizeInMBs: 866383,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "consequatur",
                        LogStreamName: "aut",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "vero",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "aut",
                    Prefix: "voluptas",
                    RoleARN: "ea",
                },
                S3BackupMode: "Enabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "qui",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 749999,
                        SizeInMBs: 171629,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "laboriosam",
                        LogStreamName: "occaecati",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "illo",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "velit",
                    Prefix: "dolor",
                    RoleARN: "sit",
                },
                Username: "ipsum",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "autem",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 463451,
                    SizeInMBs: 223924,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "officiis",
                    LogStreamName: "nisi",
                },
                CompressionFormat: "HADOOP_SNAPPY",
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "non",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "nihil",
                Prefix: "mollitia",
                RoleARN: "doloremque",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "repellendus",
                    LogStreamName: "dolorem",
                },
                HECAcknowledgmentTimeoutInSeconds: 500026,
                HECEndpoint: "dolorum",
                HECEndpointType: "Raw",
                HECToken: "in",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "recusandae",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "sed",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "officia",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "qui",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "in",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "non",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 186193,
                },
                S3BackupMode: "FailedEventsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "rerum",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 569574,
                        SizeInMBs: 739551,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "qui",
                        LogStreamName: "quos",
                    },
                    CompressionFormat: "HADOOP_SNAPPY",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "tempora",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "aliquam",
                    Prefix: "dicta",
                    RoleARN: "inventore",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "corrupti",
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