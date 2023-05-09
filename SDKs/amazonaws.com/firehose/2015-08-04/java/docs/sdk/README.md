# SDK

## Overview

<fullname>Amazon Kinesis Data Firehose API Reference</fullname> <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supportd destinations.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/firehose/>
### Available Operations

* [createDeliveryStream](#createdeliverystream) - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* [deleteDeliveryStream](#deletedeliverystream) - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* [describeDeliveryStream](#describedeliverystream) - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* [listDeliveryStreams](#listdeliverystreams) - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* [listTagsForDeliveryStream](#listtagsfordeliverystream) - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* [putRecord](#putrecord) - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [putRecordBatch](#putrecordbatch) - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [startDeliveryStreamEncryption](#startdeliverystreamencryption) - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [stopDeliveryStreamEncryption](#stopdeliverystreamencryption) - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [tagDeliveryStream](#tagdeliverystream) - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* [untagDeliveryStream](#untagdeliverystream) - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* [updateDestination](#updatedestination) - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

## createDeliveryStream

<p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeliveryStreamRequest;
import org.openapis.openapi.models.operations.CreateDeliveryStreamResponse;
import org.openapis.openapi.models.operations.CreateDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessBufferingHints;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessRetryOptions;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessS3BackupModeEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceBufferingHints;
import org.openapis.openapi.models.shared.AmazonopensearchserviceDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonopensearchserviceIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceRetryOptions;
import org.openapis.openapi.models.shared.AmazonopensearchserviceS3BackupModeEnum;
import org.openapis.openapi.models.shared.BufferingHints;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptions;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.ContentEncodingEnum;
import org.openapis.openapi.models.shared.CopyCommand;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInput;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInputS3DestinationConfiguration;
import org.openapis.openapi.models.shared.DataFormatConversionConfiguration;
import org.openapis.openapi.models.shared.DeliveryStreamEncryptionConfigurationInput;
import org.openapis.openapi.models.shared.DeliveryStreamTypeEnum;
import org.openapis.openapi.models.shared.Deserializer;
import org.openapis.openapi.models.shared.DynamicPartitioningConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchBufferingHints;
import org.openapis.openapi.models.shared.ElasticsearchDestinationConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.ElasticsearchRetryOptions;
import org.openapis.openapi.models.shared.ElasticsearchS3BackupModeEnum;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExtendedS3DestinationConfiguration;
import org.openapis.openapi.models.shared.HECEndpointTypeEnum;
import org.openapis.openapi.models.shared.HiveJsonSerDe;
import org.openapis.openapi.models.shared.HttpEndpointBufferingHints;
import org.openapis.openapi.models.shared.HttpEndpointCommonAttribute;
import org.openapis.openapi.models.shared.HttpEndpointConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointDestinationConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointRequestConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointRetryOptions;
import org.openapis.openapi.models.shared.HttpEndpointS3BackupModeEnum;
import org.openapis.openapi.models.shared.InputFormatConfiguration;
import org.openapis.openapi.models.shared.KMSEncryptionConfig;
import org.openapis.openapi.models.shared.KeyTypeEnum;
import org.openapis.openapi.models.shared.KinesisStreamSourceConfiguration;
import org.openapis.openapi.models.shared.NoEncryptionConfigEnum;
import org.openapis.openapi.models.shared.OpenXJsonSerDe;
import org.openapis.openapi.models.shared.OrcCompressionEnum;
import org.openapis.openapi.models.shared.OrcFormatVersionEnum;
import org.openapis.openapi.models.shared.OrcSerDe;
import org.openapis.openapi.models.shared.OutputFormatConfiguration;
import org.openapis.openapi.models.shared.ParquetCompressionEnum;
import org.openapis.openapi.models.shared.ParquetSerDe;
import org.openapis.openapi.models.shared.ParquetWriterVersionEnum;
import org.openapis.openapi.models.shared.ProcessingConfiguration;
import org.openapis.openapi.models.shared.Processor;
import org.openapis.openapi.models.shared.ProcessorParameter;
import org.openapis.openapi.models.shared.ProcessorParameterNameEnum;
import org.openapis.openapi.models.shared.ProcessorTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationConfiguration;
import org.openapis.openapi.models.shared.RedshiftRetryOptions;
import org.openapis.openapi.models.shared.RedshiftS3BackupModeEnum;
import org.openapis.openapi.models.shared.RetryOptions;
import org.openapis.openapi.models.shared.S3BackupModeEnum;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.SchemaConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Serializer;
import org.openapis.openapi.models.shared.SplunkDestinationConfiguration;
import org.openapis.openapi.models.shared.SplunkRetryOptions;
import org.openapis.openapi.models.shared.SplunkS3BackupModeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeliveryStreamRequest req = new CreateDeliveryStreamRequest(                new CreateDeliveryStreamInput("minima") {{
                                amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration("repellendus", "totam",                 new S3DestinationConfiguration("similique", "alias") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 872651L;
                                                        sizeInMBs = 311860L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "tempora";
                                                        logStreamName = "vel";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("officiis");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "qui";
                                                    prefix = "dolorum";
                                                }};) {{
                                    bufferingHints = new AmazonOpenSearchServerlessBufferingHints() {{
                                        intervalInSeconds = 952792L;
                                        sizeInMBs = 456130L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "harum";
                                        logStreamName = "iusto";
                                    }};;
                                    collectionEndpoint = "ipsum";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "numquam") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "tempore";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "totam") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "dolorem";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "neque") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "sit";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "voluptas") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "vel";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "maxime") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "qui";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "aspernatur") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "totam";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "temporibus") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "quam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "magni") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "neque";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "nam") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "sunt";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonOpenSearchServerlessRetryOptions() {{
                                        durationInSeconds = 765326L;
                                    }};;
                                    s3BackupMode = AmazonOpenSearchServerlessS3BackupModeEnum.ALL_DOCUMENTS;
                                    vpcConfiguration = new VpcConfiguration("nobis",                 new String[]{{
                                                        add("saepe"),
                                                    }},                 new String[]{{
                                                        add("veritatis"),
                                                    }});;
                                }};;
                                amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration("nobis", "quos",                 new S3DestinationConfiguration("tempore", "cupiditate") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 45614L;
                                                        sizeInMBs = 961937L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "dolorem";
                                                        logStreamName = "dolore";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.GZIP;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("adipisci");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "dolorum";
                                                    prefix = "architecto";
                                                }};) {{
                                    bufferingHints = new AmazonopensearchserviceBufferingHints() {{
                                        intervalInSeconds = 63038L;
                                        sizeInMBs = 16429L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "quas";
                                        logStreamName = "itaque";
                                    }};;
                                    clusterEndpoint = "consequatur";
                                    domainARN = "est";
                                    indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum.ONE_MONTH;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "qui") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "facilis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "occaecati") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "laudantium";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "omnis") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "quisquam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "voluptate") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "ipsum";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "quod") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "hic";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "vero") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "similique";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "illum") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "dolore";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "aut") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "natus";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "doloribus") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "porro";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "alias") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "eligendi";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "ea") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "tempora";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "magnam") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "vel";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "quasi") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "dolor";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "voluptatibus") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "nulla";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "saepe") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "sapiente";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonopensearchserviceRetryOptions() {{
                                        durationInSeconds = 359271L;
                                    }};;
                                    s3BackupMode = AmazonopensearchserviceS3BackupModeEnum.FAILED_DOCUMENTS_ONLY;
                                    typeName = "aliquid";
                                    vpcConfiguration = new VpcConfiguration("inventore",                 new String[]{{
                                                        add("ea"),
                                                        add("quo"),
                                                    }},                 new String[]{{
                                                        add("recusandae"),
                                                    }});;
                                }};;
                                deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput(KeyTypeEnum.AWS_OWNED_CMK) {{
                                    keyARN = "minima";
                                }};;
                                deliveryStreamType = DeliveryStreamTypeEnum.DIRECT_PUT;
                                elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration("a", "libero",                 new S3DestinationConfiguration("aut", "aut") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 533466L;
                                                        sizeInMBs = 770581L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "aliquam";
                                                        logStreamName = "fugit";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("inventore");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "non";
                                                    prefix = "et";
                                                }};) {{
                                    bufferingHints = new ElasticsearchBufferingHints() {{
                                        intervalInSeconds = 677412L;
                                        sizeInMBs = 672048L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "placeat";
                                        logStreamName = "velit";
                                    }};;
                                    clusterEndpoint = "eum";
                                    domainARN = "autem";
                                    indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum.ONE_WEEK;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "quasi") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "voluptas";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "provident") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "numquam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "odio") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "molestiae";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "rem") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "esse";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "suscipit") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "ut";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "quisquam") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "eos";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "quidem") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "ipsa";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "eos") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "fuga";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "consequatur") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "ab";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "aspernatur") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "debitis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "recusandae") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "quo";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new ElasticsearchRetryOptions() {{
                                        durationInSeconds = 799796L;
                                    }};;
                                    s3BackupMode = ElasticsearchS3BackupModeEnum.FAILED_DOCUMENTS_ONLY;
                                    typeName = "inventore";
                                    vpcConfiguration = new VpcConfiguration("nihil",                 new String[]{{
                                                        add("accusamus"),
                                                        add("aliquam"),
                                                        add("odio"),
                                                    }},                 new String[]{{
                                                        add("commodi"),
                                                        add("sapiente"),
                                                        add("dolores"),
                                                    }});;
                                }};;
                                extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration("deserunt", "molestiae") {{
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 35362L;
                                        sizeInMBs = 783648L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "eum";
                                        logStreamName = "quas";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.ZIP;
                                    dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                                        enabled = false;
                                        inputFormatConfiguration = new InputFormatConfiguration() {{
                                            deserializer = new Deserializer() {{
                                                hiveJsonSerDe = new HiveJsonSerDe() {{
                                                    timestampFormats = new String[]{{
                                                        add("deleniti"),
                                                    }};
                                                }};;
                                                openXJsonSerDe = new OpenXJsonSerDe() {{
                                                    caseInsensitive = false;
                                                    columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                                        put("fuga", "mollitia");
                                                    }};
                                                    convertDotsInJsonKeysToUnderscores = false;
                                                }};;
                                            }};;
                                        }};;
                                        outputFormatConfiguration = new OutputFormatConfiguration() {{
                                            serializer = new Serializer() {{
                                                orcSerDe = new OrcSerDe() {{
                                                    blockSizeBytes = 277596L;
                                                    bloomFilterColumns = new String[]{{
                                                        add("explicabo"),
                                                        add("minima"),
                                                        add("nisi"),
                                                    }};
                                                    bloomFilterFalsePositiveProbability = 1470.14;
                                                    compression = OrcCompressionEnum.SNAPPY;
                                                    dictionaryKeyThreshold = 1598.7;
                                                    enablePadding = false;
                                                    formatVersion = OrcFormatVersionEnum.V011;
                                                    paddingTolerance = 1294.12;
                                                    rowIndexStride = 903984L;
                                                    stripeSizeBytes = 578922L;
                                                }};;
                                                parquetSerDe = new ParquetSerDe() {{
                                                    blockSizeBytes = 543806L;
                                                    compression = ParquetCompressionEnum.UNCOMPRESSED;
                                                    enableDictionaryCompression = false;
                                                    maxPaddingBytes = 456911L;
                                                    pageSizeBytes = 910545L;
                                                    writerVersion = ParquetWriterVersionEnum.V2;
                                                }};;
                                            }};;
                                        }};;
                                        schemaConfiguration = new SchemaConfiguration() {{
                                            catalogId = "veritatis";
                                            databaseName = "esse";
                                            region = "quod";
                                            roleARN = "nam";
                                            tableName = "vero";
                                            versionId = "aliquid";
                                        }};;
                                    }};;
                                    dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                                        enabled = false;
                                        retryOptions = new RetryOptions() {{
                                            durationInSeconds = 93459L;
                                        }};;
                                    }};;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("saepe");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "vel";
                                    prefix = "harum";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "eligendi") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "minima";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "adipisci") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "culpa";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "minus") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "consequuntur";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "a") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "blanditiis";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                        }};
                                    }};;
                                    s3BackupConfiguration = new S3DestinationConfiguration("esse", "quasi") {{
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 951875L;
                                            sizeInMBs = 621679L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "sint";
                                            logStreamName = "pariatur";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("quia");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "eveniet";
                                        prefix = "asperiores";
                                    }};;
                                    s3BackupMode = S3BackupModeEnum.ENABLED;
                                }};;
                                httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration(                new HttpEndpointConfiguration("veritatis") {{
                                                    accessKey = "consequuntur";
                                                    name = "Hattie Nader";
                                                }};,                 new S3DestinationConfiguration("quae", "earum") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 424032L;
                                                        sizeInMBs = 447378L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "eius";
                                                        logStreamName = "libero";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("soluta");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "accusantium";
                                                    prefix = "aliquam";
                                                }};) {{
                                    bufferingHints = new HttpEndpointBufferingHints() {{
                                        intervalInSeconds = 958983L;
                                        sizeInMBs = 119771L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "ullam";
                                        logStreamName = "reprehenderit";
                                    }};;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "quibusdam") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "voluptatum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "dolorum") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "deleniti";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "voluptate") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "at";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "consectetur") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "minima";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "accusantium") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "iste";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "eum") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "aut";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                        }};
                                    }};;
                                    requestConfiguration = new HttpEndpointRequestConfiguration() {{
                                        commonAttributes = new org.openapis.openapi.models.shared.HttpEndpointCommonAttribute[]{{
                                            add(new HttpEndpointCommonAttribute("dolor", "occaecati") {{
                                                attributeName = "non";
                                                attributeValue = "voluptatem";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("explicabo", "voluptas") {{
                                                attributeName = "numquam";
                                                attributeValue = "impedit";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("dicta", "maiores") {{
                                                attributeName = "aut";
                                                attributeValue = "dignissimos";
                                            }}),
                                        }};
                                        contentEncoding = ContentEncodingEnum.GZIP;
                                    }};;
                                    retryOptions = new HttpEndpointRetryOptions() {{
                                        durationInSeconds = 244651L;
                                    }};;
                                    roleARN = "voluptatibus";
                                    s3BackupMode = HttpEndpointS3BackupModeEnum.FAILED_DATA_ONLY;
                                }};;
                                kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration("asperiores", "aperiam");;
                                redshiftDestinationConfiguration = new RedshiftDestinationConfiguration("ea",                 new CopyCommand("quaerat") {{
                                                    copyOptions = "consequuntur";
                                                    dataTableColumns = "repellendus";
                                                }};, "officia", "maxime",                 new S3DestinationConfiguration("dignissimos", "officia") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 989410L;
                                                        sizeInMBs = 368102L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "quae";
                                                        logStreamName = "quaerat";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("quod");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "labore";
                                                    prefix = "ab";
                                                }};, "adipisci") {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "fuga";
                                        logStreamName = "id";
                                    }};;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "totam") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "est";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "possimus") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "vel";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "in") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "cum";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new RedshiftRetryOptions() {{
                                        durationInSeconds = 828657L;
                                    }};;
                                    s3BackupConfiguration = new S3DestinationConfiguration("nemo", "recusandae") {{
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 397533L;
                                            sizeInMBs = 46007L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "cum";
                                            logStreamName = "consectetur";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.ZIP;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("exercitationem");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "earum";
                                        prefix = "facere";
                                    }};;
                                    s3BackupMode = RedshiftS3BackupModeEnum.DISABLED;
                                }};;
                                s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration("doloribus", "suscipit") {{
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 968972L;
                                        sizeInMBs = 697142L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "saepe";
                                        logStreamName = "necessitatibus";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.GZIP;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("sunt");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "asperiores";
                                    prefix = "adipisci";
                                }};;
                                splunkDestinationConfiguration = new SplunkDestinationConfiguration("non", HECEndpointTypeEnum.RAW, "beatae",                 new S3DestinationConfiguration("dignissimos", "a") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 891523L;
                                                        sizeInMBs = 233420L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "corporis";
                                                        logStreamName = "harum";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.GZIP;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("ipsa");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "voluptates";
                                                    prefix = "libero";
                                                }};) {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "vitae";
                                        logStreamName = "accusamus";
                                    }};;
                                    hecAcknowledgmentTimeoutInSeconds = 631126L;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "minima") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "voluptas";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "in") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "dolores";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new SplunkRetryOptions() {{
                                        durationInSeconds = 885963L;
                                    }};;
                                    s3BackupMode = SplunkS3BackupModeEnum.ALL_EVENTS;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("blanditiis") {{
                                        key = "adipisci";
                                        value = "cum";
                                    }}),
                                    add(new Tag("nesciunt") {{
                                        key = "quas";
                                        value = "hic";
                                    }}),
                                }};
                            }};, CreateDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_CREATE_DELIVERY_STREAM) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "pariatur";
                xAmzDate = "totam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateDeliveryStreamResponse res = sdk.sdk.createDeliveryStream(req);

            if (res.createDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeliveryStream

<p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeliveryStreamRequest;
import org.openapis.openapi.models.operations.DeleteDeliveryStreamResponse;
import org.openapis.openapi.models.operations.DeleteDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDeliveryStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeliveryStreamRequest req = new DeleteDeliveryStreamRequest(                new DeleteDeliveryStreamInput("rerum") {{
                                allowForceDelete = false;
                            }};, DeleteDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_DELETE_DELIVERY_STREAM) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
            }};            

            DeleteDeliveryStreamResponse res = sdk.sdk.deleteDeliveryStream(req);

            if (res.deleteDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDeliveryStream

<p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeliveryStreamRequest;
import org.openapis.openapi.models.operations.DescribeDeliveryStreamResponse;
import org.openapis.openapi.models.operations.DescribeDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDeliveryStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeliveryStreamRequest req = new DescribeDeliveryStreamRequest(                new DescribeDeliveryStreamInput("iste") {{
                                exclusiveStartDestinationId = "dolore";
                                limit = 671907L;
                            }};, DescribeDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_DESCRIBE_DELIVERY_STREAM) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            DescribeDeliveryStreamResponse res = sdk.sdk.describeDeliveryStream(req);

            if (res.describeDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeliveryStreams

<p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeliveryStreamsRequest;
import org.openapis.openapi.models.operations.ListDeliveryStreamsResponse;
import org.openapis.openapi.models.operations.ListDeliveryStreamsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeliveryStreamTypeEnum;
import org.openapis.openapi.models.shared.ListDeliveryStreamsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeliveryStreamsRequest req = new ListDeliveryStreamsRequest(                new ListDeliveryStreamsInput() {{
                                deliveryStreamType = DeliveryStreamTypeEnum.DIRECT_PUT;
                                exclusiveStartDeliveryStreamName = "sapiente";
                                limit = 895386L;
                            }};, ListDeliveryStreamsXAmzTargetEnum.FIREHOSE20150804_LIST_DELIVERY_STREAMS) {{
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "perferendis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "sed";
            }};            

            ListDeliveryStreamsResponse res = sdk.sdk.listDeliveryStreams(req);

            if (res.listDeliveryStreamsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForDeliveryStream

Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForDeliveryStreamRequest;
import org.openapis.openapi.models.operations.ListTagsForDeliveryStreamResponse;
import org.openapis.openapi.models.operations.ListTagsForDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForDeliveryStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForDeliveryStreamRequest req = new ListTagsForDeliveryStreamRequest(                new ListTagsForDeliveryStreamInput("eius") {{
                                exclusiveStartTagKey = "necessitatibus";
                                limit = 215529L;
                            }};, ListTagsForDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_LIST_TAGS_FOR_DELIVERY_STREAM) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListTagsForDeliveryStreamResponse res = sdk.sdk.listTagsForDeliveryStream(req);

            if (res.listTagsForDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRecord

<p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRecordRequest;
import org.openapis.openapi.models.operations.PutRecordResponse;
import org.openapis.openapi.models.operations.PutRecordXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRecordInput;
import org.openapis.openapi.models.shared.Record;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRecordRequest req = new PutRecordRequest(                new PutRecordInput("ex",                 new Record("sit"););, PutRecordXAmzTargetEnum.FIREHOSE20150804_PUT_RECORD) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "praesentium";
                xAmzDate = "facilis";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "ipsam";
            }};            

            PutRecordResponse res = sdk.sdk.putRecord(req);

            if (res.putRecordOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRecordBatch

<p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRecordBatchRequest;
import org.openapis.openapi.models.operations.PutRecordBatchResponse;
import org.openapis.openapi.models.operations.PutRecordBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRecordBatchInput;
import org.openapis.openapi.models.shared.Record;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRecordBatchRequest req = new PutRecordBatchRequest(                new PutRecordBatchInput("rem",                 new org.openapis.openapi.models.shared.Record[]{{
                                                add(new Record("error") {{
                                                    data = "nobis";
                                                }}),
                                            }});, PutRecordBatchXAmzTargetEnum.FIREHOSE20150804_PUT_RECORD_BATCH) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            PutRecordBatchResponse res = sdk.sdk.putRecordBatch(req);

            if (res.putRecordBatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDeliveryStreamEncryption

<p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDeliveryStreamEncryptionRequest;
import org.openapis.openapi.models.operations.StartDeliveryStreamEncryptionResponse;
import org.openapis.openapi.models.operations.StartDeliveryStreamEncryptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeliveryStreamEncryptionConfigurationInput;
import org.openapis.openapi.models.shared.KeyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDeliveryStreamEncryptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDeliveryStreamEncryptionRequest req = new StartDeliveryStreamEncryptionRequest(                new StartDeliveryStreamEncryptionInput("numquam") {{
                                deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput(KeyTypeEnum.AWS_OWNED_CMK) {{
                                    keyARN = "in";
                                }};;
                            }};, StartDeliveryStreamEncryptionXAmzTargetEnum.FIREHOSE20150804_START_DELIVERY_STREAM_ENCRYPTION) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "laudantium";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "laboriosam";
            }};            

            StartDeliveryStreamEncryptionResponse res = sdk.sdk.startDeliveryStreamEncryption(req);

            if (res.startDeliveryStreamEncryptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDeliveryStreamEncryption

<p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDeliveryStreamEncryptionRequest;
import org.openapis.openapi.models.operations.StopDeliveryStreamEncryptionResponse;
import org.openapis.openapi.models.operations.StopDeliveryStreamEncryptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDeliveryStreamEncryptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDeliveryStreamEncryptionRequest req = new StopDeliveryStreamEncryptionRequest(                new StopDeliveryStreamEncryptionInput("voluptatum");, StopDeliveryStreamEncryptionXAmzTargetEnum.FIREHOSE20150804_STOP_DELIVERY_STREAM_ENCRYPTION) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "hic";
                xAmzCredential = "expedita";
                xAmzDate = "debitis";
                xAmzSecurityToken = "neque";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nostrum";
            }};            

            StopDeliveryStreamEncryptionResponse res = sdk.sdk.stopDeliveryStreamEncryption(req);

            if (res.stopDeliveryStreamEncryptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagDeliveryStream

<p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagDeliveryStreamRequest;
import org.openapis.openapi.models.operations.TagDeliveryStreamResponse;
import org.openapis.openapi.models.operations.TagDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagDeliveryStreamInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagDeliveryStreamRequest req = new TagDeliveryStreamRequest(                new TagDeliveryStreamInput("dolorum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("atque") {{
                                                    key = "accusamus";
                                                    value = "tempora";
                                                }}),
                                                add(new Tag("fugiat") {{
                                                    key = "fugit";
                                                    value = "ut";
                                                }}),
                                                add(new Tag("expedita") {{
                                                    key = "voluptatem";
                                                    value = "culpa";
                                                }}),
                                            }});, TagDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_TAG_DELIVERY_STREAM) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "esse";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "sit";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "quas";
            }};            

            TagDeliveryStreamResponse res = sdk.sdk.tagDeliveryStream(req);

            if (res.tagDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagDeliveryStream

<p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagDeliveryStreamRequest;
import org.openapis.openapi.models.operations.UntagDeliveryStreamResponse;
import org.openapis.openapi.models.operations.UntagDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagDeliveryStreamInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagDeliveryStreamRequest req = new UntagDeliveryStreamRequest(                new UntagDeliveryStreamInput("corporis",                 new String[]{{
                                                add("blanditiis"),
                                            }});, UntagDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_UNTAG_DELIVERY_STREAM) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
            }};            

            UntagDeliveryStreamResponse res = sdk.sdk.untagDeliveryStream(req);

            if (res.untagDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDestination

<p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDestinationRequest;
import org.openapis.openapi.models.operations.UpdateDestinationResponse;
import org.openapis.openapi.models.operations.UpdateDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessBufferingHints;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessDestinationUpdate;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessRetryOptions;
import org.openapis.openapi.models.shared.AmazonopensearchserviceBufferingHints;
import org.openapis.openapi.models.shared.AmazonopensearchserviceDestinationUpdate;
import org.openapis.openapi.models.shared.AmazonopensearchserviceIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceRetryOptions;
import org.openapis.openapi.models.shared.BufferingHints;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptions;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.ContentEncodingEnum;
import org.openapis.openapi.models.shared.CopyCommand;
import org.openapis.openapi.models.shared.DataFormatConversionConfiguration;
import org.openapis.openapi.models.shared.Deserializer;
import org.openapis.openapi.models.shared.DynamicPartitioningConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchBufferingHints;
import org.openapis.openapi.models.shared.ElasticsearchDestinationUpdate;
import org.openapis.openapi.models.shared.ElasticsearchIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.ElasticsearchRetryOptions;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExtendedS3DestinationUpdate;
import org.openapis.openapi.models.shared.HECEndpointTypeEnum;
import org.openapis.openapi.models.shared.HiveJsonSerDe;
import org.openapis.openapi.models.shared.HttpEndpointBufferingHints;
import org.openapis.openapi.models.shared.HttpEndpointCommonAttribute;
import org.openapis.openapi.models.shared.HttpEndpointConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointDestinationUpdate;
import org.openapis.openapi.models.shared.HttpEndpointRequestConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointRetryOptions;
import org.openapis.openapi.models.shared.HttpEndpointS3BackupModeEnum;
import org.openapis.openapi.models.shared.InputFormatConfiguration;
import org.openapis.openapi.models.shared.KMSEncryptionConfig;
import org.openapis.openapi.models.shared.NoEncryptionConfigEnum;
import org.openapis.openapi.models.shared.OpenXJsonSerDe;
import org.openapis.openapi.models.shared.OrcCompressionEnum;
import org.openapis.openapi.models.shared.OrcFormatVersionEnum;
import org.openapis.openapi.models.shared.OrcSerDe;
import org.openapis.openapi.models.shared.OutputFormatConfiguration;
import org.openapis.openapi.models.shared.ParquetCompressionEnum;
import org.openapis.openapi.models.shared.ParquetSerDe;
import org.openapis.openapi.models.shared.ParquetWriterVersionEnum;
import org.openapis.openapi.models.shared.ProcessingConfiguration;
import org.openapis.openapi.models.shared.Processor;
import org.openapis.openapi.models.shared.ProcessorParameter;
import org.openapis.openapi.models.shared.ProcessorParameterNameEnum;
import org.openapis.openapi.models.shared.ProcessorTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationUpdate;
import org.openapis.openapi.models.shared.RedshiftRetryOptions;
import org.openapis.openapi.models.shared.RedshiftS3BackupModeEnum;
import org.openapis.openapi.models.shared.RetryOptions;
import org.openapis.openapi.models.shared.S3BackupModeEnum;
import org.openapis.openapi.models.shared.S3DestinationUpdate;
import org.openapis.openapi.models.shared.SchemaConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Serializer;
import org.openapis.openapi.models.shared.SplunkDestinationUpdate;
import org.openapis.openapi.models.shared.SplunkRetryOptions;
import org.openapis.openapi.models.shared.SplunkS3BackupModeEnum;
import org.openapis.openapi.models.shared.UpdateDestinationInput;
import org.openapis.openapi.models.shared.UpdateDestinationInputS3DestinationUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDestinationRequest req = new UpdateDestinationRequest(                new UpdateDestinationInput("incidunt", "reiciendis", "dolorem") {{
                                amazonOpenSearchServerlessDestinationUpdate = new AmazonOpenSearchServerlessDestinationUpdate() {{
                                    bufferingHints = new AmazonOpenSearchServerlessBufferingHints() {{
                                        intervalInSeconds = 690894L;
                                        sizeInMBs = 115703L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "architecto";
                                        logStreamName = "occaecati";
                                    }};;
                                    collectionEndpoint = "labore";
                                    indexName = "quidem";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "alias") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "tenetur";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "unde") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "deserunt";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "delectus") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "provident";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "fuga") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "reprehenderit";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "voluptatem") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "mollitia";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "atque") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "repudiandae";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "et") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "quidem";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "ea") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "amet";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "officiis") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "error";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonOpenSearchServerlessRetryOptions() {{
                                        durationInSeconds = 328303L;
                                    }};;
                                    roleARN = "aspernatur";
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "ex";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 980581L;
                                            sizeInMBs = 544647L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "at";
                                            logStreamName = "error";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.ZIP;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("suscipit");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "repudiandae";
                                        prefix = "atque";
                                        roleARN = "atque";
                                    }};;
                                }};;
                                amazonopensearchserviceDestinationUpdate = new AmazonopensearchserviceDestinationUpdate() {{
                                    bufferingHints = new AmazonopensearchserviceBufferingHints() {{
                                        intervalInSeconds = 120919L;
                                        sizeInMBs = 923306L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "dolorum";
                                        logStreamName = "repellendus";
                                    }};;
                                    clusterEndpoint = "labore";
                                    domainARN = "reiciendis";
                                    indexName = "doloremque";
                                    indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum.ONE_MONTH;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "laboriosam") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "dolores";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonopensearchserviceRetryOptions() {{
                                        durationInSeconds = 562783L;
                                    }};;
                                    roleARN = "magnam";
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "saepe";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 160467L;
                                            sizeInMBs = 580107L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "officiis";
                                            logStreamName = "perspiciatis";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.ZIP;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("adipisci");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "eveniet";
                                        prefix = "occaecati";
                                        roleARN = "consequuntur";
                                    }};;
                                    typeName = "fugit";
                                }};;
                                elasticsearchDestinationUpdate = new ElasticsearchDestinationUpdate() {{
                                    bufferingHints = new ElasticsearchBufferingHints() {{
                                        intervalInSeconds = 661118L;
                                        sizeInMBs = 335631L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "reprehenderit";
                                        logStreamName = "error";
                                    }};;
                                    clusterEndpoint = "illo";
                                    domainARN = "corporis";
                                    indexName = "quidem";
                                    indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum.ONE_MONTH;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "totam") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "iure";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "qui") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "molestiae";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "ratione") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "iure";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "rem") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "distinctio";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new ElasticsearchRetryOptions() {{
                                        durationInSeconds = 997963L;
                                    }};;
                                    roleARN = "alias";
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "corporis";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 597303L;
                                            sizeInMBs = 470649L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "mollitia";
                                            logStreamName = "voluptas";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.UNCOMPRESSED;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("maiores");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "reiciendis";
                                        prefix = "dolores";
                                        roleARN = "id";
                                    }};;
                                    typeName = "minima";
                                }};;
                                extendedS3DestinationUpdate = new ExtendedS3DestinationUpdate() {{
                                    bucketARN = "dolore";
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 680349L;
                                        sizeInMBs = 200364L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "quae";
                                        logStreamName = "recusandae";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                    dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                                        enabled = false;
                                        inputFormatConfiguration = new InputFormatConfiguration() {{
                                            deserializer = new Deserializer() {{
                                                hiveJsonSerDe = new HiveJsonSerDe() {{
                                                    timestampFormats = new String[]{{
                                                        add("molestiae"),
                                                        add("ex"),
                                                    }};
                                                }};;
                                                openXJsonSerDe = new OpenXJsonSerDe() {{
                                                    caseInsensitive = false;
                                                    columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                                        put("culpa", "adipisci");
                                                        put("debitis", "laudantium");
                                                    }};
                                                    convertDotsInJsonKeysToUnderscores = false;
                                                }};;
                                            }};;
                                        }};;
                                        outputFormatConfiguration = new OutputFormatConfiguration() {{
                                            serializer = new Serializer() {{
                                                orcSerDe = new OrcSerDe() {{
                                                    blockSizeBytes = 432606L;
                                                    bloomFilterColumns = new String[]{{
                                                        add("recusandae"),
                                                        add("esse"),
                                                    }};
                                                    bloomFilterFalsePositiveProbability = 5920.81;
                                                    compression = OrcCompressionEnum.ZLIB;
                                                    dictionaryKeyThreshold = 4317.85;
                                                    enablePadding = false;
                                                    formatVersion = OrcFormatVersionEnum.V012;
                                                    paddingTolerance = 5927.8;
                                                    rowIndexStride = 133439L;
                                                    stripeSizeBytes = 354506L;
                                                }};;
                                                parquetSerDe = new ParquetSerDe() {{
                                                    blockSizeBytes = 96804L;
                                                    compression = ParquetCompressionEnum.GZIP;
                                                    enableDictionaryCompression = false;
                                                    maxPaddingBytes = 343392L;
                                                    pageSizeBytes = 652309L;
                                                    writerVersion = ParquetWriterVersionEnum.V2;
                                                }};;
                                            }};;
                                        }};;
                                        schemaConfiguration = new SchemaConfiguration() {{
                                            catalogId = "possimus";
                                            databaseName = "animi";
                                            region = "ex";
                                            roleARN = "aliquid";
                                            tableName = "accusantium";
                                            versionId = "repellat";
                                        }};;
                                    }};;
                                    dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                                        enabled = false;
                                        retryOptions = new RetryOptions() {{
                                            durationInSeconds = 984632L;
                                        }};;
                                    }};;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("ullam");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "in";
                                    prefix = "nam";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "voluptatibus") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "placeat";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "cumque") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "officiis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "quis") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "rerum";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "aspernatur") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "perferendis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "at") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "eius";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "eum") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "eos";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "cupiditate") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "minima";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "earum") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "illum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "aliquid") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "maiores";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "fugit") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "suscipit";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "consequatur") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "necessitatibus";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    roleARN = "ducimus";
                                    s3BackupMode = S3BackupModeEnum.ENABLED;
                                    s3BackupUpdate = new S3DestinationUpdate() {{
                                        bucketARN = "occaecati";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 382440L;
                                            sizeInMBs = 241557L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "quasi";
                                            logStreamName = "magni";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("nulla");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "necessitatibus";
                                        prefix = "ipsa";
                                        roleARN = "tempora";
                                    }};;
                                }};;
                                httpEndpointDestinationUpdate = new HttpEndpointDestinationUpdate() {{
                                    bufferingHints = new HttpEndpointBufferingHints() {{
                                        intervalInSeconds = 470621L;
                                        sizeInMBs = 473190L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "dicta";
                                        logStreamName = "iusto";
                                    }};;
                                    endpointConfiguration = new HttpEndpointConfiguration("esse") {{
                                        accessKey = "praesentium";
                                        name = "Dr. Van Kassulke Sr.";
                                    }};;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "aliquid") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "ex";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "nostrum") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "laborum";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "perferendis") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "suscipit";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "id") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "voluptas";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    requestConfiguration = new HttpEndpointRequestConfiguration() {{
                                        commonAttributes = new org.openapis.openapi.models.shared.HttpEndpointCommonAttribute[]{{
                                            add(new HttpEndpointCommonAttribute("laborum", "libero") {{
                                                attributeName = "voluptates";
                                                attributeValue = "mollitia";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("enim", "vitae") {{
                                                attributeName = "ad";
                                                attributeValue = "deleniti";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("quo", "ex") {{
                                                attributeName = "repellendus";
                                                attributeValue = "ex";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("expedita", "voluptatem") {{
                                                attributeName = "ut";
                                                attributeValue = "ad";
                                            }}),
                                        }};
                                        contentEncoding = ContentEncodingEnum.GZIP;
                                    }};;
                                    retryOptions = new HttpEndpointRetryOptions() {{
                                        durationInSeconds = 737254L;
                                    }};;
                                    roleARN = "aliquid";
                                    s3BackupMode = HttpEndpointS3BackupModeEnum.FAILED_DATA_ONLY;
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "voluptatum";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 606308L;
                                            sizeInMBs = 85233L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "rerum";
                                            logStreamName = "est";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.SNAPPY;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("voluptatem");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "sapiente";
                                        prefix = "officiis";
                                        roleARN = "architecto";
                                    }};;
                                }};;
                                redshiftDestinationUpdate = new RedshiftDestinationUpdate() {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "fuga";
                                        logStreamName = "pariatur";
                                    }};;
                                    clusterJDBCURL = "debitis";
                                    copyCommand = new CopyCommand("voluptatem") {{
                                        copyOptions = "alias";
                                        dataTableColumns = "deleniti";
                                    }};;
                                    password = "earum";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "asperiores") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "minus";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "illum") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "ullam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "nam") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "impedit";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "aliquam") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "culpa";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "architecto") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "dolor";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new RedshiftRetryOptions() {{
                                        durationInSeconds = 144286L;
                                    }};;
                                    roleARN = "ab";
                                    s3BackupMode = RedshiftS3BackupModeEnum.ENABLED;
                                    s3BackupUpdate = new S3DestinationUpdate() {{
                                        bucketARN = "quae";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 222658L;
                                            sizeInMBs = 856277L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "ipsam";
                                            logStreamName = "consequuntur";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.UNCOMPRESSED;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("quas");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "eveniet";
                                        prefix = "impedit";
                                        roleARN = "officiis";
                                    }};;
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "esse";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 897277L;
                                            sizeInMBs = 153369L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "veniam";
                                            logStreamName = "nesciunt";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.SNAPPY;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("eum");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "vel";
                                        prefix = "voluptatum";
                                        roleARN = "magnam";
                                    }};;
                                    username = "exercitationem";
                                }};;
                                s3DestinationUpdate = new UpdateDestinationInputS3DestinationUpdate() {{
                                    bucketARN = "ab";
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 781480L;
                                        sizeInMBs = 421844L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "nobis";
                                        logStreamName = "laboriosam";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("consequuntur");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "voluptatem";
                                    prefix = "exercitationem";
                                    roleARN = "necessitatibus";
                                }};;
                                splunkDestinationUpdate = new SplunkDestinationUpdate() {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "quasi";
                                        logStreamName = "nisi";
                                    }};;
                                    hecAcknowledgmentTimeoutInSeconds = 871103L;
                                    hecEndpoint = "vero";
                                    hecEndpointType = HECEndpointTypeEnum.EVENT;
                                    hecToken = "harum";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "nemo") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "optio";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "voluptas") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "blanditiis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "eius") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "nemo";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "fuga") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "ducimus";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new SplunkRetryOptions() {{
                                        durationInSeconds = 97493L;
                                    }};;
                                    s3BackupMode = SplunkS3BackupModeEnum.ALL_EVENTS;
                                    s3Update = new S3DestinationUpdate() {{
                                        bucketARN = "fugiat";
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 117380L;
                                            sizeInMBs = 395544L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "consequuntur";
                                            logStreamName = "consectetur";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.UNCOMPRESSED;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("cupiditate");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "reiciendis";
                                        prefix = "soluta";
                                        roleARN = "alias";
                                    }};;
                                }};;
                            }};, UpdateDestinationXAmzTargetEnum.FIREHOSE20150804_UPDATE_DESTINATION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "eos";
                xAmzCredential = "occaecati";
                xAmzDate = "iste";
                xAmzSecurityToken = "magni";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "fuga";
            }};            

            UpdateDestinationResponse res = sdk.sdk.updateDestination(req);

            if (res.updateDestinationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
