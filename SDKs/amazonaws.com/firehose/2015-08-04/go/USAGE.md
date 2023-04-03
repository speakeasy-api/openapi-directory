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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateDeliveryStreamRequest{
        CreateDeliveryStreamInput: shared.CreateDeliveryStreamInput{
            AmazonOpenSearchServerlessDestinationConfiguration: &shared.AmazonOpenSearchServerlessDestinationConfiguration{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: 548814,
                    SizeInMBs: 592845,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "distinctio",
                    LogStreamName: "quibusdam",
                },
                CollectionEndpoint: "unde",
                IndexName: "nulla",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "error",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "suscipit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "magnam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "ipsa",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "molestiae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "placeat",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "nisi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "temporibus",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: 337396,
                },
                RoleARN: "veritatis",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "perferendis",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 368241,
                        SizeInMBs: 832620,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "sapiente",
                        LogStreamName: "quo",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "at",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "at",
                    Prefix: "maiores",
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
                    IntervalInSeconds: 639921,
                    SizeInMBs: 582020,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "fugit",
                    LogStreamName: "deleniti",
                },
                ClusterEndpoint: "hic",
                DomainARN: "optio",
                IndexName: "totam",
                IndexRotationPeriod: "NoRotation",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "qui",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "cum",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "aspernatur",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: 324141,
                },
                RoleARN: "natus",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "iste",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 222321,
                        SizeInMBs: 616934,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "laboriosam",
                        LogStreamName: "hic",
                    },
                    CompressionFormat: "HADOOP_SNAPPY",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "fuga",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "in",
                    Prefix: "corporis",
                    RoleARN: "iste",
                },
                TypeName: "iure",
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
                KeyARN: "dolorem",
                KeyType: "AWS_OWNED_CMK",
            },
            DeliveryStreamName: "explicabo",
            DeliveryStreamType: "KinesisStreamAsSource",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 315428,
                    SizeInMBs: 607831,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "nemo",
                    LogStreamName: "minima",
                },
                ClusterEndpoint: "excepturi",
                DomainARN: "accusantium",
                IndexName: "iure",
                IndexRotationPeriod: "OneWeek",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "mollitia",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "culpa",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "repellat",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "occaecati",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "molestiae",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "error",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "laborum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "enim",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "tenetur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "aut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "error",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 673660,
                },
                RoleARN: "quasi",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "voluptatibus",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 878194,
                        SizeInMBs: 468651,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "praesentium",
                        LogStreamName: "voluptatibus",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "omnis",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "voluptate",
                    Prefix: "cum",
                    RoleARN: "perferendis",
                },
                TypeName: "doloremque",
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
                    IntervalInSeconds: 688661,
                    SizeInMBs: 317983,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "accusamus",
                    LogStreamName: "commodi",
                },
                CompressionFormat: "HADOOP_SNAPPY",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: false,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "ipsum",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: false,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "molestias": "excepturi",
                                    "pariatur": "modi",
                                    "praesentium": "rem",
                                },
                                ConvertDotsInJSONKeysToUnderscores: false,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 916723,
                                BloomFilterColumns: []string{
                                    "repudiandae",
                                },
                                BloomFilterFalsePositiveProbability: 5759.47,
                                Compression: "NONE",
                                DictionaryKeyThreshold: 9292.97,
                                EnablePadding: false,
                                FormatVersion: "V0_11",
                                PaddingTolerance: 3185.69,
                                RowIndexStride: 9356,
                                StripeSizeBytes: 667411,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 842342,
                                Compression: "UNCOMPRESSED",
                                EnableDictionaryCompression: false,
                                MaxPaddingBytes: 647174,
                                PageSizeBytes: 716327,
                                WriterVersion: "V2",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "labore",
                        DatabaseName: "modi",
                        Region: "qui",
                        RoleARN: "aliquid",
                        TableName: "cupiditate",
                        VersionID: "quos",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: false,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 20107,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "magni",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "assumenda",
                Prefix: "ipsam",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "excepturi",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RoleARN: "facilis",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "tempore",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 288476,
                        SizeInMBs: 962189,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "eum",
                        LogStreamName: "non",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "sint",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "aliquid",
                    Prefix: "provident",
                    RoleARN: "necessitatibus",
                },
                S3BackupMode: "Enabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 638921,
                    SizeInMBs: 223081,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "debitis",
                    LogStreamName: "a",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "dolorum",
                    Name: "in",
                    URL: "in",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "dicta",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "cumque",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "ea",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "laborum",
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
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "provident",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "deleniti",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "amet",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "natus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "molestiae",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "magnam",
                            AttributeValue: "distinctio",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "id",
                            AttributeValue: "labore",
                        },
                    },
                    ContentEncoding: "NONE",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 383462,
                },
                RoleARN: "natus",
                S3BackupMode: "AllData",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "eum",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 878453,
                        SizeInMBs: 135474,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "architecto",
                        LogStreamName: "magnam",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "excepturi",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "ullam",
                    Prefix: "provident",
                    RoleARN: "quos",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "sint",
                RoleARN: "accusantium",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "mollitia",
                    LogStreamName: "reiciendis",
                },
                ClusterJDBCURL: "mollitia",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "ad",
                    DataTableColumns: "eum",
                    DataTableName: "dolor",
                },
                Password: "necessitatibus",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "iure",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "debitis",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: 806194,
                },
                RoleARN: "deleniti",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "facilis",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 447926,
                        SizeInMBs: 100226,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "architecto",
                        LogStreamName: "repudiandae",
                    },
                    CompressionFormat: "GZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "expedita",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "nihil",
                    Prefix: "repellat",
                    RoleARN: "quibusdam",
                },
                S3BackupMode: "Disabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "saepe",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 868126,
                        SizeInMBs: 37559,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "consequuntur",
                        LogStreamName: "praesentium",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "magni",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "sunt",
                    Prefix: "quo",
                    RoleARN: "illum",
                },
                Username: "pariatur",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "maxime",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 411397,
                    SizeInMBs: 569101,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "odit",
                    LogStreamName: "ea",
                },
                CompressionFormat: "UNCOMPRESSED",
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "ab",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "maiores",
                Prefix: "quidem",
                RoleARN: "ipsam",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "voluptate",
                    LogStreamName: "autem",
                },
                HECAcknowledgmentTimeoutInSeconds: 722056,
                HECEndpoint: "eaque",
                HECEndpointType: "Event",
                HECToken: "nemo",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "amet",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "hic",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "nobis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "quis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "dignissimos",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "eos",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "dolores",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "vero",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "hic",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 608253,
                },
                S3BackupMode: "AllEvents",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "perspiciatis",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 31838,
                        SizeInMBs: 783645,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "consequuntur",
                        LogStreamName: "blanditiis",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "eaque",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "occaecati",
                    Prefix: "rerum",
                    RoleARN: "adipisci",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "earum",
                    Value: "modi",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "pariatur",
                },
                shared.Tag{
                    Key: "provident",
                    Value: "nobis",
                },
            },
        },
        XAmzAlgorithm: "libero",
        XAmzContentSha256: "delectus",
        XAmzCredential: "quaerat",
        XAmzDate: "quos",
        XAmzSecurityToken: "aliquid",
        XAmzSignature: "dolorem",
        XAmzSignedHeaders: "dolorem",
        XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
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