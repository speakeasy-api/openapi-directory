# SDK

## Overview

<fullname>Amazon Kinesis Data Firehose API Reference</fullname> <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supportd destinations.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/firehose/>
### Available Operations

* [CreateDeliveryStream](#createdeliverystream) - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* [DeleteDeliveryStream](#deletedeliverystream) - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* [DescribeDeliveryStream](#describedeliverystream) - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* [ListDeliveryStreams](#listdeliverystreams) - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* [ListTagsForDeliveryStream](#listtagsfordeliverystream) - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* [PutRecord](#putrecord) - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [PutRecordBatch](#putrecordbatch) - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [StartDeliveryStreamEncryption](#startdeliverystreamencryption) - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [StopDeliveryStreamEncryption](#stopdeliverystreamencryption) - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [TagDeliveryStream](#tagdeliverystream) - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* [UntagDeliveryStream](#untagdeliverystream) - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* [UpdateDestination](#updatedestination) - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

## CreateDeliveryStream

<p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateDeliveryStream(ctx, operations.CreateDeliveryStreamRequest{
        CreateDeliveryStreamInput: shared.CreateDeliveryStreamInput{
            AmazonOpenSearchServerlessDestinationConfiguration: &shared.AmazonOpenSearchServerlessDestinationConfiguration{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: sdk.Int64(881005),
                    SizeInMBs: sdk.Int64(696344),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("voluptatibus"),
                    LogStreamName: sdk.String("voluptas"),
                },
                CollectionEndpoint: sdk.String("natus"),
                IndexName: "eos",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "ab",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "voluptate",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "deleniti",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "necessitatibus",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "ipsum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "eius",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "perferendis",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: sdk.Int64(758379),
                },
                RoleARN: "accusamus",
                S3BackupMode: shared.AmazonOpenSearchServerlessS3BackupModeEnumFailedDocumentsOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "saepe",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(383464),
                        SizeInMBs: sdk.Int64(645785),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("provident"),
                        LogStreamName: sdk.String("minima"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "totam",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("similique"),
                    Prefix: sdk.String("alias"),
                    RoleARN: "at",
                },
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "quaerat",
                    SecurityGroupIds: []string{
                        "vel",
                        "quod",
                    },
                    SubnetIds: []string{
                        "qui",
                        "dolorum",
                        "a",
                        "esse",
                    },
                },
            },
            AmazonopensearchserviceDestinationConfiguration: &shared.AmazonopensearchserviceDestinationConfiguration{
                BufferingHints: &shared.AmazonopensearchserviceBufferingHints{
                    IntervalInSeconds: sdk.Int64(687488),
                    SizeInMBs: sdk.Int64(483409),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("ipsum"),
                    LogStreamName: sdk.String("quisquam"),
                },
                ClusterEndpoint: sdk.String("tenetur"),
                DomainARN: sdk.String("amet"),
                IndexName: "tempore",
                IndexRotationPeriod: shared.AmazonopensearchserviceIndexRotationPeriodEnumOneMonth.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "sapiente",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "nihil",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "sed",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "libero",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "deserunt",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: sdk.Int64(214880),
                },
                RoleARN: "incidunt",
                S3BackupMode: shared.AmazonopensearchserviceS3BackupModeEnumFailedDocumentsOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "cupiditate",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(807581),
                        SizeInMBs: sdk.Int64(863856),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("soluta"),
                        LogStreamName: sdk.String("dicta"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "totam",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("incidunt"),
                    Prefix: sdk.String("aspernatur"),
                    RoleARN: "dolores",
                },
                TypeName: sdk.String("distinctio"),
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "facilis",
                    SecurityGroupIds: []string{
                        "quam",
                        "molestias",
                    },
                    SubnetIds: []string{
                        "qui",
                        "neque",
                        "fugit",
                        "magni",
                    },
                },
            },
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: sdk.String("odio"),
                KeyType: shared.KeyTypeEnumAwsOwnedCmk,
            },
            DeliveryStreamName: "ullam",
            DeliveryStreamType: shared.DeliveryStreamTypeEnumKinesisStreamAsSource.ToPointer(),
            ElasticsearchDestinationConfiguration: &shared.ElasticsearchDestinationConfiguration{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: sdk.Int64(940432),
                    SizeInMBs: sdk.Int64(30452),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("cumque"),
                    LogStreamName: sdk.String("soluta"),
                },
                ClusterEndpoint: sdk.String("nobis"),
                DomainARN: sdk.String("et"),
                IndexName: "saepe",
                IndexRotationPeriod: shared.ElasticsearchIndexRotationPeriodEnumOneHour.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "tempore",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "aperiam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "dolorem",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: sdk.Int64(286915),
                },
                RoleARN: "adipisci",
                S3BackupMode: shared.ElasticsearchS3BackupModeEnumAllDocuments.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "architecto",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(63038),
                        SizeInMBs: sdk.Int64(16429),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("quas"),
                        LogStreamName: sdk.String("itaque"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "est",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("repellendus"),
                    Prefix: sdk.String("porro"),
                    RoleARN: "doloribus",
                },
                TypeName: sdk.String("ut"),
                VpcConfiguration: &shared.VpcConfiguration{
                    RoleARN: "facilis",
                    SecurityGroupIds: []string{
                        "qui",
                        "quae",
                        "laudantium",
                    },
                    SubnetIds: []string{
                        "occaecati",
                        "voluptatibus",
                    },
                },
            },
            ExtendedS3DestinationConfiguration: &shared.ExtendedS3DestinationConfiguration{
                BucketARN: "quisquam",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(876506),
                    SizeInMBs: sdk.Int64(606476),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("quis"),
                    LogStreamName: sdk.String("ipsum"),
                },
                CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: sdk.Bool(false),
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "consectetur",
                                    "vero",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: sdk.Bool(false),
                                ColumnToJSONKeyMappings: map[string]string{
                                    "dignissimos": "hic",
                                    "distinctio": "quod",
                                    "odio": "similique",
                                    "facilis": "vero",
                                },
                                ConvertDotsInJSONKeysToUnderscores: sdk.Bool(false),
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: sdk.Int64(498140),
                                BloomFilterColumns: []string{
                                    "quibusdam",
                                    "illum",
                                },
                                BloomFilterFalsePositiveProbability: sdk.Float64(1943.42),
                                Compression: shared.OrcCompressionEnumZlib.ToPointer(),
                                DictionaryKeyThreshold: sdk.Float64(7733.26),
                                EnablePadding: sdk.Bool(false),
                                FormatVersion: shared.OrcFormatVersionEnumV011.ToPointer(),
                                PaddingTolerance: sdk.Float64(9742.59),
                                RowIndexStride: sdk.Int64(347233),
                                StripeSizeBytes: sdk.Int64(862310),
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: sdk.Int64(148141),
                                Compression: shared.ParquetCompressionEnumSnappy.ToPointer(),
                                EnableDictionaryCompression: sdk.Bool(false),
                                MaxPaddingBytes: sdk.Int64(981830),
                                PageSizeBytes: sdk.Int64(985033),
                                WriterVersion: shared.ParquetWriterVersionEnumV1.ToPointer(),
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: sdk.String("eligendi"),
                        DatabaseName: sdk.String("ducimus"),
                        Region: sdk.String("alias"),
                        RoleARN: sdk.String("officia"),
                        TableName: sdk.String("tempora"),
                        VersionID: sdk.String("ipsam"),
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: sdk.Bool(false),
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: sdk.Int64(410492),
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "aspernatur",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("vel"),
                Prefix: sdk.String("possimus"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "laudantium",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "quasi",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RoleARN: "nulla",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "excepturi",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(972920),
                        SizeInMBs: sdk.Int64(343605),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("sapiente"),
                        LogStreamName: sdk.String("quisquam"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ea",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("impedit"),
                    Prefix: sdk.String("corporis"),
                    RoleARN: "veniam",
                },
                S3BackupMode: shared.S3BackupModeEnumDisabled.ToPointer(),
            },
            HTTPEndpointDestinationConfiguration: &shared.HTTPEndpointDestinationConfiguration{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: sdk.Int64(81101),
                    SizeInMBs: sdk.Int64(301831),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("ea"),
                    LogStreamName: sdk.String("quo"),
                },
                EndpointConfiguration: shared.HTTPEndpointConfiguration{
                    AccessKey: sdk.String("consectetur"),
                    Name: sdk.String("Dr. Bruce Hane"),
                    URL: "aut",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "aliquam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "accusamus",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "non",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "laborum",
                            AttributeValue: "placeat",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "velit",
                            AttributeValue: "eum",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "autem",
                            AttributeValue: "nobis",
                        },
                    },
                    ContentEncoding: shared.ContentEncodingEnumGzip.ToPointer(),
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: sdk.Int64(829603),
                },
                RoleARN: sdk.String("nulla"),
                S3BackupMode: shared.HTTPEndpointS3BackupModeEnumFailedDataOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "libero",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(96549),
                        SizeInMBs: sdk.Int64(270328),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("numquam"),
                        LogStreamName: sdk.String("explicabo"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumZip.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ipsa",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("molestiae"),
                    Prefix: sdk.String("magnam"),
                    RoleARN: "odio",
                },
            },
            KinesisStreamSourceConfiguration: &shared.KinesisStreamSourceConfiguration{
                KinesisStreamARN: "eius",
                RoleARN: "esse",
            },
            RedshiftDestinationConfiguration: &shared.RedshiftDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("esse"),
                    LogStreamName: sdk.String("rem"),
                },
                ClusterJDBCURL: "fuga",
                CopyCommand: shared.CopyCommand{
                    CopyOptions: sdk.String("reprehenderit"),
                    DataTableColumns: sdk.String("quidem"),
                    DataTableName: "fugiat",
                },
                Password: "ut",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "eos",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "quisquam",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferSizeInMBs,
                                    ParameterValue: "quidem",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: sdk.Int64(778696),
                },
                RoleARN: "illum",
                S3BackupConfiguration: &shared.S3DestinationConfiguration{
                    BucketARN: "quo",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(681359),
                        SizeInMBs: sdk.Int64(259422),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("eos"),
                        LogStreamName: sdk.String("voluptas"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "cupiditate",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("consequatur"),
                    Prefix: sdk.String("tempora"),
                    RoleARN: "debitis",
                },
                S3BackupMode: shared.RedshiftS3BackupModeEnumDisabled.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "aspernatur",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(197054),
                        SizeInMBs: sdk.Int64(779192),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("esse"),
                        LogStreamName: sdk.String("recusandae"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumUncompressed.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "distinctio",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("quod"),
                    Prefix: sdk.String("dignissimos"),
                    RoleARN: "inventore",
                },
                Username: "nihil",
            },
            S3DestinationConfiguration: &shared.CreateDeliveryStreamInputS3DestinationConfiguration{
                BucketARN: "totam",
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(882710),
                    SizeInMBs: sdk.Int64(306810),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("odio"),
                    LogStreamName: sdk.String("occaecati"),
                },
                CompressionFormat: shared.CompressionFormatEnumZip.ToPointer(),
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "sapiente",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("dolores"),
                Prefix: sdk.String("deserunt"),
                RoleARN: "molestiae",
            },
            SplunkDestinationConfiguration: &shared.SplunkDestinationConfiguration{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("accusantium"),
                    LogStreamName: sdk.String("porro"),
                },
                HECAcknowledgmentTimeoutInSeconds: sdk.Int64(430402),
                HECEndpoint: "quas",
                HECEndpointType: shared.HECEndpointTypeEnumEvent,
                HECToken: "consequuntur",
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "mollitia",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "minima",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "fugit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "consequuntur",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "occaecati",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: sdk.Int64(92260),
                },
                S3BackupMode: shared.SplunkS3BackupModeEnumFailedEventsOnly.ToPointer(),
                S3Configuration: shared.S3DestinationConfiguration{
                    BucketARN: "eveniet",
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(882042),
                        SizeInMBs: sdk.Int64(82971),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("esse"),
                        LogStreamName: sdk.String("quod"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "vero",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("aliquid"),
                    Prefix: sdk.String("quasi"),
                    RoleARN: "saepe",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "harum",
                    Value: sdk.String("molestiae"),
                },
                shared.Tag{
                    Key: "rerum",
                    Value: sdk.String("occaecati"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
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

## DeleteDeliveryStream

<p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>

### Example Usage

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
    res, err := s.SDK.DeleteDeliveryStream(ctx, operations.DeleteDeliveryStreamRequest{
        DeleteDeliveryStreamInput: shared.DeleteDeliveryStreamInput{
            AllowForceDelete: sdk.Bool(false),
            DeliveryStreamName: "cumque",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DeleteDeliveryStreamXAmzTargetEnumFirehose20150804DeleteDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDeliveryStreamOutput != nil {
        // handle response
    }
}
```

## DescribeDeliveryStream

<p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>

### Example Usage

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
    res, err := s.SDK.DescribeDeliveryStream(ctx, operations.DescribeDeliveryStreamRequest{
        DescribeDeliveryStreamInput: shared.DescribeDeliveryStreamInput{
            DeliveryStreamName: "blanditiis",
            ExclusiveStartDestinationID: sdk.String("provident"),
            Limit: sdk.Int64(953722),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DescribeDeliveryStreamXAmzTargetEnumFirehose20150804DescribeDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeliveryStreamOutput != nil {
        // handle response
    }
}
```

## ListDeliveryStreams

<p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>

### Example Usage

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
    res, err := s.SDK.ListDeliveryStreams(ctx, operations.ListDeliveryStreamsRequest{
        ListDeliveryStreamsInput: shared.ListDeliveryStreamsInput{
            DeliveryStreamType: shared.DeliveryStreamTypeEnumKinesisStreamAsSource.ToPointer(),
            ExclusiveStartDeliveryStreamName: sdk.String("possimus"),
            Limit: sdk.Int64(157632),
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.ListDeliveryStreamsXAmzTargetEnumFirehose20150804ListDeliveryStreams,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeliveryStreamsOutput != nil {
        // handle response
    }
}
```

## ListTagsForDeliveryStream

Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 

### Example Usage

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
    res, err := s.SDK.ListTagsForDeliveryStream(ctx, operations.ListTagsForDeliveryStreamRequest{
        ListTagsForDeliveryStreamInput: shared.ListTagsForDeliveryStreamInput{
            DeliveryStreamName: "culpa",
            ExclusiveStartTagKey: sdk.String("aliquid"),
            Limit: sdk.Int64(949298),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListTagsForDeliveryStreamXAmzTargetEnumFirehose20150804ListTagsForDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForDeliveryStreamOutput != nil {
        // handle response
    }
}
```

## PutRecord

<p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

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
    res, err := s.SDK.PutRecord(ctx, operations.PutRecordRequest{
        PutRecordInput: shared.PutRecordInput{
            DeliveryStreamName: "soluta",
            Record: shared.Record{
                Data: "accusantium",
            },
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.PutRecordXAmzTargetEnumFirehose20150804PutRecord,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRecordOutput != nil {
        // handle response
    }
}
```

## PutRecordBatch

<p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

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
    res, err := s.SDK.PutRecordBatch(ctx, operations.PutRecordBatchRequest{
        PutRecordBatchInput: shared.PutRecordBatchInput{
            DeliveryStreamName: "aut",
            Records: []shared.Record{
                shared.Record{
                    Data: "qui",
                },
                shared.Record{
                    Data: "quibusdam",
                },
                shared.Record{
                    Data: "ex",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.PutRecordBatchXAmzTargetEnumFirehose20150804PutRecordBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRecordBatchOutput != nil {
        // handle response
    }
}
```

## StartDeliveryStreamEncryption

<p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

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
    res, err := s.SDK.StartDeliveryStreamEncryption(ctx, operations.StartDeliveryStreamEncryptionRequest{
        StartDeliveryStreamEncryptionInput: shared.StartDeliveryStreamEncryptionInput{
            DeliveryStreamEncryptionConfigurationInput: &shared.DeliveryStreamEncryptionConfigurationInput{
                KeyARN: sdk.String("at"),
                KeyType: shared.KeyTypeEnumAwsOwnedCmk,
            },
            DeliveryStreamName: "voluptate",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.StartDeliveryStreamEncryptionXAmzTargetEnumFirehose20150804StartDeliveryStreamEncryption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDeliveryStreamEncryptionOutput != nil {
        // handle response
    }
}
```

## StopDeliveryStreamEncryption

<p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

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
    res, err := s.SDK.StopDeliveryStreamEncryption(ctx, operations.StopDeliveryStreamEncryptionRequest{
        StopDeliveryStreamEncryptionInput: shared.StopDeliveryStreamEncryptionInput{
            DeliveryStreamName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.StopDeliveryStreamEncryptionXAmzTargetEnumFirehose20150804StopDeliveryStreamEncryption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDeliveryStreamEncryptionOutput != nil {
        // handle response
    }
}
```

## TagDeliveryStream

<p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

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
    res, err := s.SDK.TagDeliveryStream(ctx, operations.TagDeliveryStreamRequest{
        TagDeliveryStreamInput: shared.TagDeliveryStreamInput{
            DeliveryStreamName: "non",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolor",
                    Value: sdk.String("occaecati"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.TagDeliveryStreamXAmzTargetEnumFirehose20150804TagDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagDeliveryStreamOutput != nil {
        // handle response
    }
}
```

## UntagDeliveryStream

<p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

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
    res, err := s.SDK.UntagDeliveryStream(ctx, operations.UntagDeliveryStreamRequest{
        UntagDeliveryStreamInput: shared.UntagDeliveryStreamInput{
            DeliveryStreamName: "maiores",
            TagKeys: []string{
                "velit",
                "voluptatibus",
                "voluptas",
            },
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.UntagDeliveryStreamXAmzTargetEnumFirehose20150804UntagDeliveryStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagDeliveryStreamOutput != nil {
        // handle response
    }
}
```

## UpdateDestination

<p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

### Example Usage

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
    res, err := s.SDK.UpdateDestination(ctx, operations.UpdateDestinationRequest{
        UpdateDestinationInput: shared.UpdateDestinationInput{
            AmazonOpenSearchServerlessDestinationUpdate: &shared.AmazonOpenSearchServerlessDestinationUpdate{
                BufferingHints: &shared.AmazonOpenSearchServerlessBufferingHints{
                    IntervalInSeconds: sdk.Int64(807023),
                    SizeInMBs: sdk.Int64(490305),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("officia"),
                    LogStreamName: sdk.String("asperiores"),
                },
                CollectionEndpoint: sdk.String("nemo"),
                IndexName: sdk.String("quae"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "labore",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "adipisci",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "id",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "velit",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "totam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "vel",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "quos",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RetryOptions: &shared.AmazonOpenSearchServerlessRetryOptions{
                    DurationInSeconds: sdk.Int64(287051),
                },
                RoleARN: sdk.String("possimus"),
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("facilis"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(738227),
                        SizeInMBs: sdk.Int64(414857),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("in"),
                        LogStreamName: sdk.String("corporis"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "assumenda",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("nemo"),
                    Prefix: sdk.String("recusandae"),
                    RoleARN: sdk.String("aliquid"),
                },
            },
            AmazonopensearchserviceDestinationUpdate: &shared.AmazonopensearchserviceDestinationUpdate{
                BufferingHints: &shared.AmazonopensearchserviceBufferingHints{
                    IntervalInSeconds: sdk.Int64(46007),
                    SizeInMBs: sdk.Int64(738683),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("consectetur"),
                    LogStreamName: sdk.String("in"),
                },
                ClusterEndpoint: sdk.String("exercitationem"),
                DomainARN: sdk.String("earum"),
                IndexName: sdk.String("facere"),
                IndexRotationPeriod: shared.AmazonopensearchserviceIndexRotationPeriodEnumOneHour.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "quidem",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "necessitatibus",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "adipisci",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "dignissimos",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "corporis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "laboriosam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "voluptates",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumBufferIntervalInSeconds,
                                    ParameterValue: "vitae",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                    },
                },
                RetryOptions: &shared.AmazonopensearchserviceRetryOptions{
                    DurationInSeconds: sdk.Int64(631126),
                },
                RoleARN: sdk.String("tempora"),
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("aspernatur"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(379057),
                        SizeInMBs: sdk.Int64(374244),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("voluptas"),
                        LogStreamName: sdk.String("minima"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "dolorum",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("adipisci"),
                    Prefix: sdk.String("minus"),
                    RoleARN: sdk.String("dolores"),
                },
                TypeName: sdk.String("blanditiis"),
            },
            CurrentDeliveryStreamVersionID: "in",
            DeliveryStreamName: "dolore",
            DestinationID: "aliquam",
            ElasticsearchDestinationUpdate: &shared.ElasticsearchDestinationUpdate{
                BufferingHints: &shared.ElasticsearchBufferingHints{
                    IntervalInSeconds: sdk.Int64(885963),
                    SizeInMBs: sdk.Int64(839189),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("ullam"),
                    LogStreamName: sdk.String("adipisci"),
                },
                ClusterEndpoint: sdk.String("cum"),
                DomainARN: sdk.String("blanditiis"),
                IndexName: sdk.String("quas"),
                IndexRotationPeriod: shared.ElasticsearchIndexRotationPeriodEnumOneMonth.ToPointer(),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "pariatur",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "hic",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "nobis",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                    },
                },
                RetryOptions: &shared.ElasticsearchRetryOptions{
                    DurationInSeconds: sdk.Int64(699575),
                },
                RoleARN: sdk.String("sed"),
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("reiciendis"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(131852),
                        SizeInMBs: sdk.Int64(994401),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("facilis"),
                        LogStreamName: sdk.String("voluptate"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "ab",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("iste"),
                    Prefix: sdk.String("dolore"),
                    RoleARN: sdk.String("laborum"),
                },
                TypeName: sdk.String("sed"),
            },
            ExtendedS3DestinationUpdate: &shared.ExtendedS3DestinationUpdate{
                BucketARN: sdk.String("in"),
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(417486),
                    SizeInMBs: sdk.Int64(696077),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("explicabo"),
                    LogStreamName: sdk.String("voluptas"),
                },
                CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                DataFormatConversionConfiguration: &shared.DataFormatConversionConfiguration{
                    Enabled: sdk.Bool(false),
                    InputFormatConfiguration: &shared.InputFormatConfiguration{
                        Deserializer: &shared.Deserializer{
                            HiveJSONSerDe: &shared.HiveJSONSerDe{
                                TimestampFormats: []string{
                                    "suscipit",
                                },
                            },
                            OpenXJSONSerDe: &shared.OpenXJSONSerDe{
                                CaseInsensitive: sdk.Bool(false),
                                ColumnToJSONKeyMappings: map[string]string{
                                    "debitis": "illo",
                                    "reiciendis": "perferendis",
                                    "corrupti": "maiores",
                                    "incidunt": "sed",
                                },
                                ConvertDotsInJSONKeysToUnderscores: sdk.Bool(false),
                            },
                        },
                    },
                    OutputFormatConfiguration: &shared.OutputFormatConfiguration{
                        Serializer: &shared.Serializer{
                            OrcSerDe: &shared.OrcSerDe{
                                BlockSizeBytes: sdk.Int64(592231),
                                BloomFilterColumns: []string{
                                    "necessitatibus",
                                    "ipsum",
                                },
                                BloomFilterFalsePositiveProbability: sdk.Float64(4067.33),
                                Compression: shared.OrcCompressionEnumZlib.ToPointer(),
                                DictionaryKeyThreshold: sdk.Float64(5520.78),
                                EnablePadding: sdk.Bool(false),
                                FormatVersion: shared.OrcFormatVersionEnumV012.ToPointer(),
                                PaddingTolerance: sdk.Float64(2716.53),
                                RowIndexStride: sdk.Int64(273009),
                                StripeSizeBytes: sdk.Int64(455444),
                            },
                            ParquetSerDe: &shared.ParquetSerDe{
                                BlockSizeBytes: sdk.Int64(970076),
                                Compression: shared.ParquetCompressionEnumGzip.ToPointer(),
                                EnableDictionaryCompression: sdk.Bool(false),
                                MaxPaddingBytes: sdk.Int64(25497),
                                PageSizeBytes: sdk.Int64(248413),
                                WriterVersion: shared.ParquetWriterVersionEnumV2.ToPointer(),
                            },
                        },
                    },
                    SchemaConfiguration: &shared.SchemaConfiguration{
                        CatalogID: sdk.String("praesentium"),
                        DatabaseName: sdk.String("facilis"),
                        Region: sdk.String("quaerat"),
                        RoleARN: sdk.String("incidunt"),
                        TableName: sdk.String("ipsam"),
                        VersionID: sdk.String("debitis"),
                    },
                },
                DynamicPartitioningConfiguration: &shared.DynamicPartitioningConfiguration{
                    Enabled: sdk.Bool(false),
                    RetryOptions: &shared.RetryOptions{
                        DurationInSeconds: sdk.Int64(524970),
                    },
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "sit",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("nobis"),
                Prefix: sdk.String("error"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "reiciendis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "magni",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumMetadataExtractionQuery,
                                    ParameterValue: "veniam",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "officiis",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumLambdaArn,
                                    ParameterValue: "laudantium",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "praesentium",
                                },
                            },
                            Type: shared.ProcessorTypeEnumMetadataExtraction,
                        },
                    },
                },
                RoleARN: sdk.String("laboriosam"),
                S3BackupMode: shared.S3BackupModeEnumEnabled.ToPointer(),
                S3BackupUpdate: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("voluptatum"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(622385),
                        SizeInMBs: sdk.Int64(944708),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("expedita"),
                        LogStreamName: sdk.String("debitis"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumGzip.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "dolorum",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("nostrum"),
                    Prefix: sdk.String("officia"),
                    RoleARN: sdk.String("dolorum"),
                },
            },
            HTTPEndpointDestinationUpdate: &shared.HTTPEndpointDestinationUpdate{
                BufferingHints: &shared.HTTPEndpointBufferingHints{
                    IntervalInSeconds: sdk.Int64(548361),
                    SizeInMBs: sdk.Int64(879235),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("tempora"),
                    LogStreamName: sdk.String("atque"),
                },
                EndpointConfiguration: &shared.HTTPEndpointConfiguration{
                    AccessKey: sdk.String("fugit"),
                    Name: sdk.String("Janis Bartell"),
                    URL: "magnam",
                },
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumJSONParsingEngine,
                                    ParameterValue: "sit",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "quas",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                    },
                },
                RequestConfiguration: &shared.HTTPEndpointRequestConfiguration{
                    CommonAttributes: []shared.HTTPEndpointCommonAttribute{
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "et",
                            AttributeValue: "blanditiis",
                        },
                        shared.HTTPEndpointCommonAttribute{
                            AttributeName: "ex",
                            AttributeValue: "sed",
                        },
                    },
                    ContentEncoding: shared.ContentEncodingEnumNone.ToPointer(),
                },
                RetryOptions: &shared.HTTPEndpointRetryOptions{
                    DurationInSeconds: sdk.Int64(425508),
                },
                RoleARN: sdk.String("nostrum"),
                S3BackupMode: shared.HTTPEndpointS3BackupModeEnumAllData.ToPointer(),
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("error"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(8511),
                        SizeInMBs: sdk.Int64(279068),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("reiciendis"),
                        LogStreamName: sdk.String("dolorem"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "dicta",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("architecto"),
                    Prefix: sdk.String("occaecati"),
                    RoleARN: sdk.String("labore"),
                },
            },
            RedshiftDestinationUpdate: &shared.RedshiftDestinationUpdate{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("quidem"),
                    LogStreamName: sdk.String("atque"),
                },
                ClusterJDBCURL: sdk.String("laborum"),
                CopyCommand: &shared.CopyCommand{
                    CopyOptions: sdk.String("nam"),
                    DataTableColumns: sdk.String("tenetur"),
                    DataTableName: "laboriosam",
                },
                Password: sdk.String("alias"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "unde",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "provident",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "delectus",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                    },
                },
                RetryOptions: &shared.RedshiftRetryOptions{
                    DurationInSeconds: sdk.Int64(16871),
                },
                RoleARN: sdk.String("est"),
                S3BackupMode: shared.RedshiftS3BackupModeEnumEnabled.ToPointer(),
                S3BackupUpdate: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("reprehenderit"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(813679),
                        SizeInMBs: sdk.Int64(685092),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("praesentium"),
                        LogStreamName: sdk.String("mollitia"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumGzip.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "voluptatem",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("quisquam"),
                    Prefix: sdk.String("repudiandae"),
                    RoleARN: sdk.String("quasi"),
                },
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("atque"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(442036),
                        SizeInMBs: sdk.Int64(991142),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("totam"),
                        LogStreamName: sdk.String("suscipit"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "maxime",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("et"),
                    Prefix: sdk.String("esse"),
                    RoleARN: sdk.String("amet"),
                },
                Username: sdk.String("assumenda"),
            },
            S3DestinationUpdate: &shared.UpdateDestinationInputS3DestinationUpdate{
                BucketARN: sdk.String("ea"),
                BufferingHints: &shared.BufferingHints{
                    IntervalInSeconds: sdk.Int64(539118),
                    SizeInMBs: sdk.Int64(623295),
                },
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("officiis"),
                    LogStreamName: sdk.String("officiis"),
                },
                CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                        AWSKMSKeyARN: "natus",
                    },
                    NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                },
                ErrorOutputPrefix: sdk.String("minima"),
                Prefix: sdk.String("aspernatur"),
                RoleARN: sdk.String("ex"),
            },
            SplunkDestinationUpdate: &shared.SplunkDestinationUpdate{
                CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                    Enabled: sdk.Bool(false),
                    LogGroupName: sdk.String("maiores"),
                    LogStreamName: sdk.String("corrupti"),
                },
                HECAcknowledgmentTimeoutInSeconds: sdk.Int64(871786),
                HECEndpoint: sdk.String("error"),
                HECEndpointType: shared.HECEndpointTypeEnumEvent.ToPointer(),
                HECToken: sdk.String("suscipit"),
                ProcessingConfiguration: &shared.ProcessingConfiguration{
                    Enabled: sdk.Bool(false),
                    Processors: []shared.Processor{
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumRoleArn,
                                    ParameterValue: "sunt",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "dolorum",
                                },
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumSubRecordType,
                                    ParameterValue: "labore",
                                },
                            },
                            Type: shared.ProcessorTypeEnumAppendDelimiterToRecord,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "dicta",
                                },
                            },
                            Type: shared.ProcessorTypeEnumRecordDeAggregation,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumNumberOfRetries,
                                    ParameterValue: "enim",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                        shared.Processor{
                            Parameters: []shared.ProcessorParameter{
                                shared.ProcessorParameter{
                                    ParameterName: shared.ProcessorParameterNameEnumDelimiter,
                                    ParameterValue: "molestias",
                                },
                            },
                            Type: shared.ProcessorTypeEnumLambda,
                        },
                    },
                },
                RetryOptions: &shared.SplunkRetryOptions{
                    DurationInSeconds: sdk.Int64(906355),
                },
                S3BackupMode: shared.SplunkS3BackupModeEnumFailedEventsOnly.ToPointer(),
                S3Update: &shared.S3DestinationUpdate{
                    BucketARN: sdk.String("occaecati"),
                    BufferingHints: &shared.BufferingHints{
                        IntervalInSeconds: sdk.Int64(886305),
                        SizeInMBs: sdk.Int64(597937),
                    },
                    CloudWatchLoggingOptions: &shared.CloudWatchLoggingOptions{
                        Enabled: sdk.Bool(false),
                        LogGroupName: sdk.String("in"),
                        LogStreamName: sdk.String("adipisci"),
                    },
                    CompressionFormat: shared.CompressionFormatEnumHadoopSnappy.ToPointer(),
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        KMSEncryptionConfig: &shared.KMSEncryptionConfig{
                            AWSKMSKeyARN: "occaecati",
                        },
                        NoEncryptionConfig: shared.NoEncryptionConfigEnumNoEncryption.ToPointer(),
                    },
                    ErrorOutputPrefix: sdk.String("consequuntur"),
                    Prefix: sdk.String("fugit"),
                    RoleARN: sdk.String("id"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.UpdateDestinationXAmzTargetEnumFirehose20150804UpdateDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDestinationOutput != nil {
        // handle response
    }
}
```
