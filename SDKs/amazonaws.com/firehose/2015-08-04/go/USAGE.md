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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Firehose_20150804.CreateDeliveryStream",
        },
        Request: shared.CreateDeliveryStreamInput{
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: "fugit",
                KeyType: "AWS_OWNED_CMK",
            },
            DeliveryStreamName: "nihil",
            DeliveryStreamType: "KinesisStreamAsSource",
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: 7837839688282259259,
                    SizeInMBs: 2518412263346885298,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "et",
                    LogStreamName: "ut",
                },
                ClusterEndpoint: "dolorem",
                DomainARN: "et",
                IndexName: "voluptate",
                IndexRotationPeriod: "NoRotation",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "debitis",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "SubRecordType",
                                    ParameterValue: "id",
                                },
                            },
                            Type: "Lambda",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "commodi",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "est",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "odit",
                                },
                            },
                            Type: "Lambda",
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: 167566062957544642,
                },
                RoleARN: "omnis",
                S3BackupMode: "FailedDocumentsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "illo",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5558237345453186302,
                        SizeInMBs: 7845762441295307478,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "consectetur",
                        LogStreamName: "nobis",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "qui",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "at",
                    Prefix: "ipsum",
                    RoleARN: "eveniet",
                },
                TypeName: "modi",
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "sint",
                    SecurityGroupIds: []string{
                        "ut",
                    },
                    SubnetIds: []string{
                        "aut",
                        "reprehenderit",
                        "tempore",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "maiores",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 1061380815263676471,
                    SizeInMBs: 7242748068272024738,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "veritatis",
                    LogStreamName: "in",
                },
                CompressionFormat: "HADOOP_SNAPPY",
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: false,
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "ex",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: true,
                                ColumnToJSONKeyMappings: map[string]string{
                                    "vel": "rerum",
                                },
                                ConvertDotsInJSONKeysToUnderscores: true,
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: 1938800996802160635,
                                BloomFilterColumns: []string{
                                    "reprehenderit",
                                },
                                BloomFilterFalsePositiveProbability: 94.099998,
                                Compression: "SNAPPY",
                                DictionaryKeyThreshold: 31.100000,
                                EnablePadding: true,
                                FormatVersion: "V0_11",
                                PaddingTolerance: 26.100000,
                                RowIndexStride: 8218430188258725598,
                                StripeSizeBytes: 4255970180603226314,
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: 2682844416202521633,
                                Compression: "SNAPPY",
                                EnableDictionaryCompression: true,
                                MaxPaddingBytes: 5902760509050140210,
                                PageSizeBytes: 9021104375654741729,
                                WriterVersion: "V2",
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: "cumque",
                        DatabaseName: "soluta",
                        Region: "sunt",
                        RoleARN: "voluptates",
                        TableName: "magni",
                        VersionID: "et",
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: true,
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: 8482125374365136680,
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                        AWSKMSKeyARN: "earum",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "omnis",
                Prefix: "ut",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferIntervalInSeconds",
                                    ParameterValue: "reprehenderit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "nostrum",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "MetadataExtractionQuery",
                                    ParameterValue: "a",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "aut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "consequuntur",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RoleARN: "autem",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "ipsa",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 1627381309359808899,
                        SizeInMBs: 8204648627352676445,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "atque",
                        LogStreamName: "ratione",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "explicabo",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "maxime",
                    Prefix: "eum",
                    RoleARN: "perferendis",
                },
                S3BackupMode: "Disabled",
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: 2037591971392316788,
                    SizeInMBs: 6394356307858046544,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "cumque",
                    LogStreamName: "minima",
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: "necessitatibus",
                    Name: "est",
                    URL: "quis",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "ad",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "RoleArn",
                                    ParameterValue: "vel",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "nihil",
                            AttributeValue: "tempora",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "deserunt",
                            AttributeValue: "eaque",
                        },
                    },
                    ContentEncoding: "NONE",
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: 157519078836327761,
                },
                RoleARN: "autem",
                S3BackupMode: "FailedDataOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "vel",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 8835845053628448511,
                        SizeInMBs: 3874550043338258151,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "nisi",
                        LogStreamName: "quis",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "porro",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "et",
                    Prefix: "accusamus",
                    RoleARN: "numquam",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "laborum",
                RoleARN: "rerum",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: true,
                    LogGroupName: "laborum",
                    LogStreamName: "fugit",
                },
                ClusterJDBCURL: "quis",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: "minus",
                    DataTableColumns: "soluta",
                    DataTableName: "aperiam",
                },
                Password: "consequuntur",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: true,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "ipsa",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "aliquam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "LambdaArn",
                                    ParameterValue: "sed",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: 6464511094049078446,
                },
                RoleARN: "consequuntur",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "non",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 5366472482114725502,
                        SizeInMBs: 432317278959866118,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "pariatur",
                        LogStreamName: "quasi",
                    },
                    CompressionFormat: "Snappy",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "enim",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "sit",
                    Prefix: "possimus",
                    RoleARN: "modi",
                },
                S3BackupMode: "Disabled",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "consequuntur",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 6729602721413075826,
                        SizeInMBs: 7446022752824825204,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: true,
                        LogGroupName: "occaecati",
                        LogStreamName: "ex",
                    },
                    CompressionFormat: "ZIP",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "quia",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "velit",
                    Prefix: "quae",
                    RoleARN: "est",
                },
                Username: "ut",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "necessitatibus",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: 546268158124317116,
                    SizeInMBs: 7814737740801134387,
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "dolorum",
                    LogStreamName: "doloribus",
                },
                CompressionFormat: "ZIP",
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                        AWSKMSKeyARN: "sunt",
                    },
                    NoEncryptionConfig: "NoEncryption",
                },
                ErrorOutputPrefix: "et",
                Prefix: "ut",
                RoleARN: "asperiores",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: false,
                    LogGroupName: "est",
                    LogStreamName: "ipsum",
                },
                HECAcknowledgmentTimeoutInSeconds: 6787227741588449494,
                HECEndpoint: "voluptas",
                HECEndpointType: "Raw",
                HECToken: "dolores",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: false,
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "JsonParsingEngine",
                                    ParameterValue: "ut",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "Delimiter",
                                    ParameterValue: "illo",
                                },
                            },
                            Type: "AppendDelimiterToRecord",
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: "BufferSizeInMBs",
                                    ParameterValue: "ducimus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: "NumberOfRetries",
                                    ParameterValue: "blanditiis",
                                },
                            },
                            Type: "RecordDeAggregation",
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: 1638829746864917218,
                },
                S3BackupMode: "FailedEventsOnly",
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "dolore",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: 7274936573655343394,
                        SizeInMBs: 7796777083842162182,
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: false,
                        LogGroupName: "modi",
                        LogStreamName: "sunt",
                    },
                    CompressionFormat: "UNCOMPRESSED",
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KmsEncryptionConfig{
                            AWSKMSKeyARN: "amet",
                        },
                        NoEncryptionConfig: "NoEncryption",
                    },
                    ErrorOutputPrefix: "a",
                    Prefix: "qui",
                    RoleARN: "excepturi",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corporis",
                    Value: "dicta",
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