<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateDeliveryStreamRequest{
        Headers: operations.CreateDeliveryStreamHeaders{
            XAmzAlgorithm: "sunt",
            XAmzContentSha256: "eum",
            XAmzCredential: "earum",
            XAmzDate: "et",
            XAmzSecurityToken: "officia",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "dolor",
            XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
        },
        Request: shared.CreateDeliveryStreamInput{
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: "quaerat",
                KeyType: "CUSTOMER_MANAGED_CMK",
            },
            DeliveryStreamName: "et",
            DeliveryStreamType: "KinesisStreamAsSource",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 6732690776502850923,
                    SizeInMBs: 3775576383156376750,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "aut",
                    LogStreamName: "explicabo",
                },
                ClusterEndpoint: "cupiditate",
                DomainARN: "temporibus",
                IndexName: "saepe",
                IndexRotationPeriod: "OneMonth",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "et",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "quis",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "aliquid",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 4286177495908355721,
                },
                RoleARN: "et",
                S3BackupMode: "AllDocuments",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "sunt",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5875212041318087154,
                        SizeInMBs: 3576897317488866583,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "rerum",
                        LogStreamName: "officiis",
                    },
                    CompressionFormat: "HADOOP_SNAPPY",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "sed",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "enim",
                    Prefix: "eos",
                    RoleARN: "ipsa",
                },
                TypeName: "cum",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "sint",
                    SecurityGroupIds: []string{
                        "eaque",
                        "facilis",
                    },
                    SubnetIds: []string{
                        "ut",
                        "et",
                        "quam",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "sit",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 6149198411893951373,
                    SizeInMBs: 5132794701053150193,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "et",
                    LogStreamName: "amet",
                },
                CompressionFormat: "GZIP",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: true,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "minima",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: false,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "consequatur": "eum",
                                },
                                ConvertDotsInJSONKeysToUnderscores: true,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 8490340655146226453,
                                BloomFilterColumns: []string{
                                    "repellendus",
                                },
                                BloomFilterFalsePositiveProbability: 36.099998,
                                Compression: "SNAPPY",
                                DictionaryKeyThreshold: 41.099998,
                                EnablePadding: true,
                                FormatVersion: "V0_12",
                                PaddingTolerance: 28.100000,
                                RowIndexStride: 3022685211573855326,
                                StripeSizeBytes: 536448273514821351,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 2679765305844388554,
                                Compression: "UNCOMPRESSED",
                                EnableDictionaryCompression: false,
                                MaxPaddingBytes: 8617221661803175936,
                                PageSizeBytes: 1822686033537255733,
                                WriterVersion: "V2",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "eos",
                        DatabaseName: "praesentium",
                        Region: "itaque",
                        RoleARN: "ipsum",
                        TableName: "natus",
                        VersionID: "quas",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: false,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 4116847041228634424,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                        AWSKMSKeyARN: "quod",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "eius",
                Prefix: "totam",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "asperiores",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "hic",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "est",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "occaecati",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "temporibus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "voluptas",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RoleARN: "atque",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "soluta",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 8758726653918526048,
                        SizeInMBs: 4542131346235756591,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "quas",
                        LogStreamName: "facere",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "dolores",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "error",
                    Prefix: "autem",
                    RoleARN: "eaque",
                },
                S3BackupMode: "Enabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 2203199943965877863,
                    SizeInMBs: 3676231951168577912,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "incidunt",
                    LogStreamName: "sit",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "saepe",
                    Name: "est",
                    URL: "odio",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "et",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "ipsa",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "deleniti",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "hic",
                            AttributeValue: "doloribus",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "corrupti",
                            AttributeValue: "nemo",
                        },
                    },
                    ContentEncoding: "NONE",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 6877243303226184295,
                },
                RoleARN: "autem",
                S3BackupMode: "FailedDataOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "voluptatem",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5381697763642569917,
                        SizeInMBs: 4621739702096724847,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "mollitia",
                        LogStreamName: "autem",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "consequuntur",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "vitae",
                    Prefix: "fugit",
                    RoleARN: "non",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "aut",
                RoleARN: "autem",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "aperiam",
                    LogStreamName: "maiores",
                },
                ClusterJDBCURL: "culpa",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "quaerat",
                    DataTableColumns: "possimus",
                    DataTableName: "harum",
                },
                Password: "laudantium",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "omnis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "minus",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: map[string]interface{}{
                        "vitae": "quia",
                        "doloribus": "adipisci",
                    },
                },
                RoleARN: "cupiditate",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "similique",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 8800233763271236040,
                        SizeInMBs: 3661049067042185258,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "maiores",
                        LogStreamName: "est",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "qui",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "quo",
                    Prefix: "nihil",
                    RoleARN: "quam",
                },
                S3BackupMode: "Disabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "vel",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 6279036500422337798,
                        SizeInMBs: 1332344506397849579,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "qui",
                        LogStreamName: "modi",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "corporis",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "necessitatibus",
                    Prefix: "sit",
                    RoleARN: "minus",
                },
                Username: "sequi",
            },
            S3DestinationConfiguration: map[string]interface{}{
                "quidem": "iure",
                "consequatur": "occaecati",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "repudiandae",
                    LogStreamName: "voluptas",
                },
                HECAcknowledgmentTimeoutInSeconds: 5245262261256331691,
                HECEndpoint: "veniam",
                HECEndpointType: "Raw",
                HECToken: "similique",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "numquam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "consequatur",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "est",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "quis",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 4106284396928400709,
                },
                S3BackupMode: "AllEvents",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "voluptas",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 3387374800052271048,
                        SizeInMBs: 3206660118895023421,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "delectus",
                        LogStreamName: "mollitia",
                    },
                    CompressionFormat: "HADOOP_SNAPPY",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "repellendus",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "repellat",
                    Prefix: "eveniet",
                    RoleARN: "ad",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptas",
                    Value: "odio",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "nostrum",
                },
                shared.Tag{
                    Key: "et",
                    Value: "nemo",
                },
            },
        },
    }
    
    res, err := s.CreateDeliveryStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeliveryStreamOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->