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
            XAmzAlgorithm: "repellendus",
            XAmzContentSha256: "cupiditate",
            XAmzCredential: "natus",
            XAmzDate: "molestiae",
            XAmzSecurityToken: "nesciunt",
            XAmzSignature: "consectetur",
            XAmzSignedHeaders: "iure",
            XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
        },
        Request: shared.CreateDeliveryStreamInput{
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: "sit",
                KeyType: "AWS_OWNED_CMK",
            },
            DeliveryStreamName: "est",
            DeliveryStreamType: "KinesisStreamAsSource",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 4913775816691860455,
                    SizeInMBs: 6388634623525659448,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "est",
                    LogStreamName: "necessitatibus",
                },
                ClusterEndpoint: "ut",
                DomainARN: "iusto",
                IndexName: "expedita",
                IndexRotationPeriod: "NoRotation",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "atque",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "aut",
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
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 7832808625612860727,
                },
                RoleARN: "ducimus",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "optio",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 3730549494198104687,
                        SizeInMBs: 7173580319038902782,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "autem",
                        LogStreamName: "tenetur",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "repellat",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "modi",
                    Prefix: "tempore",
                    RoleARN: "repellendus",
                },
                TypeName: "asperiores",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "molestiae",
                    SecurityGroupIds: []string{
                        "reprehenderit",
                        "non",
                        "quis",
                    },
                    SubnetIds: []string{
                        "mollitia",
                        "sequi",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "maxime",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 4008341877940571090,
                    SizeInMBs: 1527626489101312024,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "ea",
                    LogStreamName: "in",
                },
                CompressionFormat: "UNCOMPRESSED",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: false,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "eveniet",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: true,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "repudiandae": "aspernatur",
                                    "consequuntur": "in",
                                    "quam": "harum",
                                },
                                ConvertDotsInJSONKeysToUnderscores: true,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 6227322861960617195,
                                BloomFilterColumns: []string{
                                    "neque",
                                    "quia",
                                    "qui",
                                },
                                BloomFilterFalsePositiveProbability: 11.100000,
                                Compression: "NONE",
                                DictionaryKeyThreshold: 72.199997,
                                EnablePadding: true,
                                FormatVersion: "V0_11",
                                PaddingTolerance: 27.200001,
                                RowIndexStride: 4790355136803249341,
                                StripeSizeBytes: 1509612718786048821,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 1558267707881136306,
                                Compression: "GZIP",
                                EnableDictionaryCompression: false,
                                MaxPaddingBytes: 5155336118319790528,
                                PageSizeBytes: 8551026195547362653,
                                WriterVersion: "V2",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "quia",
                        DatabaseName: "corporis",
                        Region: "laboriosam",
                        RoleARN: "hic",
                        TableName: "porro",
                        VersionID: "atque",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: true,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 3668410904791842109,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                        AWSKMSKeyARN: "beatae",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "sunt",
                Prefix: "sequi",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "quis",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "similique",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "deserunt",
                                },
                            },
                            Type: "MetadataExtraction",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "est",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RoleARN: "quia",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "animi",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 4543644223830212662,
                        SizeInMBs: 186512558197545847,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "harum",
                        LogStreamName: "ipsa",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "nisi",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "non",
                    Prefix: "autem",
                    RoleARN: "deleniti",
                },
                S3BackupMode: "Enabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 889179140112191969,
                    SizeInMBs: 8217887369224743077,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "sunt",
                    LogStreamName: "non",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "blanditiis",
                    Name: "omnis",
                    URL: "impedit",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "iure",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "in",
                            AttributeValue: "est",
                        },
                    },
                    ContentEncoding: "NONE",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 7407954097840616519,
                },
                RoleARN: "omnis",
                S3BackupMode: "FailedDataOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "id",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 2986343076357446094,
                        SizeInMBs: 9138926896528054305,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "sint",
                        LogStreamName: "rerum",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "voluptas",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "ut",
                    Prefix: "qui",
                    RoleARN: "aperiam",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "voluptatem",
                RoleARN: "sit",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "ea",
                    LogStreamName: "quod",
                },
                ClusterJDBCURL: "quia",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "nisi",
                    DataTableColumns: "sunt",
                    DataTableName: "magni",
                },
                Password: "voluptates",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "minus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "eum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "nostrum",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "laborum",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: 3378553292571641863,
                },
                RoleARN: "aut",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "et",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5154647024511087326,
                        SizeInMBs: 3283561951860873060,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "impedit",
                        LogStreamName: "voluptas",
                    },
                    CompressionFormat: "GZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "rerum",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "qui",
                    Prefix: "temporibus",
                    RoleARN: "at",
                },
                S3BackupMode: "Enabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "qui",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 6255246750626858445,
                        SizeInMBs: 3462742284048348632,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "sit",
                        LogStreamName: "porro",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "iusto",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "aut",
                    Prefix: "porro",
                    RoleARN: "qui",
                },
                Username: "hic",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "qui",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 302431697846476833,
                    SizeInMBs: 9215903083251049227,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "recusandae",
                    LogStreamName: "corporis",
                },
                CompressionFormat: "UNCOMPRESSED",
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                        AWSKMSKeyARN: "qui",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "eos",
                Prefix: "maiores",
                RoleARN: "rerum",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "quia",
                    LogStreamName: "ut",
                },
                HECAcknowledgmentTimeoutInSeconds: 3987231774246520401,
                HECEndpoint: "incidunt",
                HECEndpointType: "Event",
                HECToken: "voluptatem",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "pariatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "cupiditate",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "reiciendis",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 6871627712247884748,
                },
                S3BackupMode: "AllEvents",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "error",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5200220478374960164,
                        SizeInMBs: 3540212452975936931,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "eveniet",
                        LogStreamName: "ut",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "sit",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "veritatis",
                    Prefix: "inventore",
                    RoleARN: "quibusdam",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "dolores",
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