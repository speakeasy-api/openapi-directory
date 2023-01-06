# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateDeliveryStream` - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per AWS Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* `DeleteDeliveryStream` - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* `DescribeDeliveryStream` - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* `ListDeliveryStreams` - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* `ListTagsForDeliveryStream` - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* `PutRecord` - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `PutRecordBatch` - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `StartDeliveryStreamEncryption` - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `StopDeliveryStreamEncryption` - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `TagDeliveryStream` - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* `UntagDeliveryStream` - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* `UpdateDestination` - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
