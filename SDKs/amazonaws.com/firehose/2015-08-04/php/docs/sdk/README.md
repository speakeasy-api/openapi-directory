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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Processor;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameter;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KMSEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\NoEncryptionConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamEncryptionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedS3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatConversionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Deserializer;
use \OpenAPI\OpenAPI\Models\Shared\HiveJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OpenXJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Serializer;
use \OpenAPI\OpenAPI\Models\Shared\OrcSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OrcCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrcFormatVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetSerDe;
use \OpenAPI\OpenAPI\Models\Shared\ParquetCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetWriterVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DynamicPartitioningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\S3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRequestConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointCommonAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ContentEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CopyCommand;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeliveryStreamInputS3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SplunkDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HECEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplunkRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\SplunkS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeliveryStreamRequest();
    $request->createDeliveryStreamInput = new CreateDeliveryStreamInput();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints = new AmazonOpenSearchServerlessBufferingHints();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints->intervalInSeconds = 474867;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints->sizeInMBs = 19193;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'nihil';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'magnam';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->collectionEndpoint = 'distinctio';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->indexName = 'id';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->retryOptions = new AmazonOpenSearchServerlessRetryOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->retryOptions->durationInSeconds = 290077;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->roleARN = 'suscipit';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3BackupMode = AmazonOpenSearchServerlessS3BackupModeEnum::ALL_DOCUMENTS;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bucketARN = 'nobis';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 428769;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 878453;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'aspernatur';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'architecto';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::GZIP;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'et';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->errorOutputPrefix = 'excepturi';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->prefix = 'ullam';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->roleARN = 'provident';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->roleARN = 'quos';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->subnetIds = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints = new AmazonopensearchserviceBufferingHints();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints->intervalInSeconds = 896547;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints->sizeInMBs = 141264;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'nemo';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'quasi';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->clusterEndpoint = 'iure';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->domainARN = 'doloribus';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->indexName = 'debitis';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum::ONE_HOUR;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->retryOptions = new AmazonopensearchserviceRetryOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->retryOptions->durationInSeconds = 537023;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->roleARN = 'facilis';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3BackupMode = AmazonopensearchserviceS3BackupModeEnum::FAILED_DOCUMENTS_ONLY;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bucketARN = 'architecto';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 99569;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 919483;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'ullam';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'expedita';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::ZIP;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'repellat';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->errorOutputPrefix = 'quibusdam';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->prefix = 'sed';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->roleARN = 'saepe';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->typeName = 'pariatur';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->roleARN = 'accusantium';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'praesentium',
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->subnetIds = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput();
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput->keyARN = 'illum';
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput->keyType = KeyTypeEnum::CUSTOMER_MANAGED_CMK;
    $request->createDeliveryStreamInput->deliveryStreamName = 'maxime';
    $request->createDeliveryStreamInput->deliveryStreamType = DeliveryStreamTypeEnum::DIRECT_PUT;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints = new ElasticsearchBufferingHints();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints->intervalInSeconds = 569101;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints->sizeInMBs = 139972;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'ea';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'accusantium';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->clusterEndpoint = 'ab';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->domainARN = 'maiores';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->indexName = 'quidem';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum::ONE_HOUR;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->retryOptions = new ElasticsearchRetryOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->retryOptions->durationInSeconds = 420075;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->roleARN = 'nam';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3BackupMode = ElasticsearchS3BackupModeEnum::FAILED_DOCUMENTS_ONLY;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bucketARN = 'pariatur';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 365496;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 975522;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'perferendis';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'fugiat';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::GZIP;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'aut';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->errorOutputPrefix = 'cumque';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->prefix = 'corporis';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->roleARN = 'hic';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->typeName = 'libero';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->roleARN = 'nobis';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'quis',
    ];
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->subnetIds = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bucketARN = 'nesciunt';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints->intervalInSeconds = 179490;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints->sizeInMBs = 18521;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'dolores';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'minus';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->compressionFormat = CompressionFormatEnum::ZIP;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration = new DataFormatConversionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration = new InputFormatConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer = new Deserializer();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe = new HiveJsonSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe->timestampFormats = [
        'vero',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe = new OpenXJsonSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->caseInsensitive = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->columnToJsonKeyMappings = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->convertDotsInJsonKeysToUnderscores = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration = new OutputFormatConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer = new Serializer();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe = new OrcSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->blockSizeBytes = 596656;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterColumns = [
        'porro',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterFalsePositiveProbability = 1646.94;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->compression = OrcCompressionEnum::ZLIB;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->dictionaryKeyThreshold = 6214.79;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->enablePadding = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->formatVersion = OrcFormatVersionEnum::V011;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->paddingTolerance = 5772.29;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->rowIndexStride = 699098;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->stripeSizeBytes = 237893;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe = new ParquetSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->blockSizeBytes = 992397;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->compression = ParquetCompressionEnum::SNAPPY;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->enableDictionaryCompression = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->maxPaddingBytes = 267262;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->pageSizeBytes = 613966;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->writerVersion = ParquetWriterVersionEnum::V2;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration = new SchemaConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->catalogId = 'deleniti';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->databaseName = 'pariatur';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->region = 'provident';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->roleARN = 'nobis';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->tableName = 'libero';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->versionId = 'delectus';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->retryOptions = new RetryOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->retryOptions->durationInSeconds = 311945;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'quos';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->errorOutputPrefix = 'aliquid';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->prefix = 'dolorem';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->roleARN = 'dolor';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bucketARN = 'qui';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints->intervalInSeconds = 218749;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints->sizeInMBs = 944373;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logGroupName = 'excepturi';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logStreamName = 'cum';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->compressionFormat = CompressionFormatEnum::ZIP;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'dignissimos';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->errorOutputPrefix = 'reiciendis';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->prefix = 'amet';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->roleARN = 'dolorum';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupMode = S3BackupModeEnum::DISABLED;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints = new HttpEndpointBufferingHints();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints->intervalInSeconds = 85295;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints->sizeInMBs = 58029;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'ipsa';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'iure';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration = new HttpEndpointConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->accessKey = 'odio';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->name = 'Sophia Predovic';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->url = 'natus';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
    ];
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration = new HttpEndpointRequestConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration->commonAttributes = [
        new HttpEndpointCommonAttribute(),
        new HttpEndpointCommonAttribute(),
        new HttpEndpointCommonAttribute(),
    ];
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration->contentEncoding = ContentEncodingEnum::NONE;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->retryOptions = new HttpEndpointRetryOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->retryOptions->durationInSeconds = 854614;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->roleARN = 'ab';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3BackupMode = HttpEndpointS3BackupModeEnum::ALL_DATA;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bucketARN = 'dolorum';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 478596;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 453697;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'dolorum';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'deleniti';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::SNAPPY;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'necessitatibus';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->errorOutputPrefix = 'distinctio';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->prefix = 'asperiores';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->roleARN = 'nihil';
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration();
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration->kinesisStreamARN = 'ipsum';
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration->roleARN = 'voluptate';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration = new RedshiftDestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'id';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'saepe';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->clusterJDBCURL = 'eius';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand = new CopyCommand();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->copyOptions = 'aspernatur';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->dataTableColumns = 'perferendis';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->dataTableName = 'amet';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->password = 'optio';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->retryOptions = new RedshiftRetryOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->retryOptions->durationInSeconds = 320017;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->roleARN = 'saepe';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bucketARN = 'suscipit';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints->intervalInSeconds = 645785;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints->sizeInMBs = 588317;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logGroupName = 'minima';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logStreamName = 'repellendus';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->compressionFormat = CompressionFormatEnum::ZIP;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'similique';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->errorOutputPrefix = 'alias';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->prefix = 'at';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->roleARN = 'quaerat';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupMode = RedshiftS3BackupModeEnum::DISABLED;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bucketARN = 'vel';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 798047;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 885338;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'qui';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'dolorum';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::HADOOP_SNAPPY;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'esse';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->errorOutputPrefix = 'harum';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->prefix = 'iusto';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->roleARN = 'ipsum';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->username = 'quisquam';
    $request->createDeliveryStreamInput->s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bucketARN = 'tenetur';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints->intervalInSeconds = 229442;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints->sizeInMBs = 730856;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'accusamus';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'numquam';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->compressionFormat = CompressionFormatEnum::GZIP;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'dolorem';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->errorOutputPrefix = 'sapiente';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->prefix = 'totam';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->roleARN = 'nihil';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration = new SplunkDestinationConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'sit';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'expedita';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecAcknowledgmentTimeoutInSeconds = 207470;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecEndpoint = 'sed';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecEndpointType = HECEndpointTypeEnum::RAW;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecToken = 'libero';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->retryOptions = new SplunkRetryOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->retryOptions->durationInSeconds = 646265;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3BackupMode = SplunkS3BackupModeEnum::FAILED_EVENTS_ONLY;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bucketARN = 'ipsum';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 277628;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 186458;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'cupiditate';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'maxime';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::HADOOP_SNAPPY;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'soluta';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->errorOutputPrefix = 'dicta';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->prefix = 'laborum';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->roleARN = 'totam';
    $request->createDeliveryStreamInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = CreateDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_CREATE_DELIVERY_STREAM;

    $response = $sdk->sdk->createDeliveryStream($request);

    if ($response->createDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeliveryStream

<p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeliveryStreamRequest();
    $request->deleteDeliveryStreamInput = new DeleteDeliveryStreamInput();
    $request->deleteDeliveryStreamInput->allowForceDelete = false;
    $request->deleteDeliveryStreamInput->deliveryStreamName = 'temporibus';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DeleteDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_DELETE_DELIVERY_STREAM;

    $response = $sdk->sdk->deleteDeliveryStream($request);

    if ($response->deleteDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeliveryStream

<p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeliveryStreamRequest();
    $request->describeDeliveryStreamInput = new DescribeDeliveryStreamInput();
    $request->describeDeliveryStreamInput->deliveryStreamName = 'nam';
    $request->describeDeliveryStreamInput->exclusiveStartDestinationId = 'hic';
    $request->describeDeliveryStreamInput->limit = 30452;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_DESCRIBE_DELIVERY_STREAM;

    $response = $sdk->sdk->describeDeliveryStream($request);

    if ($response->describeDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeliveryStreams

<p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeliveryStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeliveryStreamsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDeliveryStreamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeliveryStreamsRequest();
    $request->listDeliveryStreamsInput = new ListDeliveryStreamsInput();
    $request->listDeliveryStreamsInput->deliveryStreamType = DeliveryStreamTypeEnum::KINESIS_STREAM_AS_SOURCE;
    $request->listDeliveryStreamsInput->exclusiveStartDeliveryStreamName = 'quos';
    $request->listDeliveryStreamsInput->limit = 731694;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = ListDeliveryStreamsXAmzTargetEnum::FIREHOSE20150804_LIST_DELIVERY_STREAMS;

    $response = $sdk->sdk->listDeliveryStreams($request);

    if ($response->listDeliveryStreamsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForDeliveryStream

Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForDeliveryStreamRequest();
    $request->listTagsForDeliveryStreamInput = new ListTagsForDeliveryStreamInput();
    $request->listTagsForDeliveryStreamInput->deliveryStreamName = 'dolorum';
    $request->listTagsForDeliveryStreamInput->exclusiveStartTagKey = 'architecto';
    $request->listTagsForDeliveryStreamInput->limit = 63038;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = ListTagsForDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_LIST_TAGS_FOR_DELIVERY_STREAM;

    $response = $sdk->sdk->listTagsForDeliveryStream($request);

    if ($response->listTagsForDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRecord

<p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRecordInput;
use \OpenAPI\OpenAPI\Models\Shared\Record;
use \OpenAPI\OpenAPI\Models\Operations\PutRecordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRecordRequest();
    $request->putRecordInput = new PutRecordInput();
    $request->putRecordInput->deliveryStreamName = 'doloribus';
    $request->putRecordInput->record = new Record();
    $request->putRecordInput->record->data = 'ut';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = PutRecordXAmzTargetEnum::FIREHOSE20150804_PUT_RECORD;

    $response = $sdk->sdk->putRecord($request);

    if ($response->putRecordOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRecordBatch

<p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRecordBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRecordBatchInput;
use \OpenAPI\OpenAPI\Models\Shared\Record;
use \OpenAPI\OpenAPI\Models\Operations\PutRecordBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRecordBatchRequest();
    $request->putRecordBatchInput = new PutRecordBatchInput();
    $request->putRecordBatchInput->deliveryStreamName = 'voluptatibus';
    $request->putRecordBatchInput->records = [
        new Record(),
        new Record(),
        new Record(),
        new Record(),
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = PutRecordBatchXAmzTargetEnum::FIREHOSE20150804_PUT_RECORD_BATCH;

    $response = $sdk->sdk->putRecordBatch($request);

    if ($response->putRecordBatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDeliveryStreamEncryption

<p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDeliveryStreamEncryptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDeliveryStreamEncryptionInput;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamEncryptionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartDeliveryStreamEncryptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDeliveryStreamEncryptionRequest();
    $request->startDeliveryStreamEncryptionInput = new StartDeliveryStreamEncryptionInput();
    $request->startDeliveryStreamEncryptionInput->deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput();
    $request->startDeliveryStreamEncryptionInput->deliveryStreamEncryptionConfigurationInput->keyARN = 'vero';
    $request->startDeliveryStreamEncryptionInput->deliveryStreamEncryptionConfigurationInput->keyType = KeyTypeEnum::CUSTOMER_MANAGED_CMK;
    $request->startDeliveryStreamEncryptionInput->deliveryStreamName = 'dignissimos';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = StartDeliveryStreamEncryptionXAmzTargetEnum::FIREHOSE20150804_START_DELIVERY_STREAM_ENCRYPTION;

    $response = $sdk->sdk->startDeliveryStreamEncryption($request);

    if ($response->startDeliveryStreamEncryptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDeliveryStreamEncryption

<p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDeliveryStreamEncryptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDeliveryStreamEncryptionInput;
use \OpenAPI\OpenAPI\Models\Operations\StopDeliveryStreamEncryptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDeliveryStreamEncryptionRequest();
    $request->stopDeliveryStreamEncryptionInput = new StopDeliveryStreamEncryptionInput();
    $request->stopDeliveryStreamEncryptionInput->deliveryStreamName = 'ducimus';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = StopDeliveryStreamEncryptionXAmzTargetEnum::FIREHOSE20150804_STOP_DELIVERY_STREAM_ENCRYPTION;

    $response = $sdk->sdk->stopDeliveryStreamEncryption($request);

    if ($response->stopDeliveryStreamEncryptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagDeliveryStream

<p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagDeliveryStreamRequest();
    $request->tagDeliveryStreamInput = new TagDeliveryStreamInput();
    $request->tagDeliveryStreamInput->deliveryStreamName = 'voluptatibus';
    $request->tagDeliveryStreamInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = TagDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_TAG_DELIVERY_STREAM;

    $response = $sdk->sdk->tagDeliveryStream($request);

    if ($response->tagDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagDeliveryStream

<p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagDeliveryStreamRequest();
    $request->untagDeliveryStreamInput = new UntagDeliveryStreamInput();
    $request->untagDeliveryStreamInput->deliveryStreamName = 'ducimus';
    $request->untagDeliveryStreamInput->tagKeys = [
        'officia',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UntagDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_UNTAG_DELIVERY_STREAM;

    $response = $sdk->sdk->untagDeliveryStream($request);

    if ($response->untagDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDestination

<p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDestinationInput;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Processor;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameter;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\BufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KMSEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\NoEncryptionConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedS3DestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatConversionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Deserializer;
use \OpenAPI\OpenAPI\Models\Shared\HiveJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OpenXJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Serializer;
use \OpenAPI\OpenAPI\Models\Shared\OrcSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OrcCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrcFormatVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetSerDe;
use \OpenAPI\OpenAPI\Models\Shared\ParquetCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetWriterVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DynamicPartitioningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\S3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRequestConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointCommonAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ContentEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CopyCommand;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDestinationInputS3DestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SplunkDestinationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\HECEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplunkRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\SplunkS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDestinationRequest();
    $request->updateDestinationInput = new UpdateDestinationInput();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate = new AmazonOpenSearchServerlessDestinationUpdate();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->bufferingHints = new AmazonOpenSearchServerlessBufferingHints();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->bufferingHints->intervalInSeconds = 189848;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->bufferingHints->sizeInMBs = 401132;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'laudantium';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'dicta';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->collectionEndpoint = 'dolor';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->indexName = 'maiores';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
    ];
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->retryOptions = new AmazonOpenSearchServerlessRetryOptions();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->retryOptions->durationInSeconds = 406120;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->roleARN = 'nulla';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->bucketARN = 'excepturi';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 972920;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 343605;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'sapiente';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'quisquam';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::HADOOP_SNAPPY;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'ea';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->errorOutputPrefix = 'impedit';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->prefix = 'corporis';
    $request->updateDestinationInput->amazonOpenSearchServerlessDestinationUpdate->s3Update->roleARN = 'veniam';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate = new AmazonopensearchserviceDestinationUpdate();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->bufferingHints = new AmazonopensearchserviceBufferingHints();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->bufferingHints->intervalInSeconds = 399499;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->bufferingHints->sizeInMBs = 81101;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'magnam';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'ea';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->clusterEndpoint = 'quo';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->domainARN = 'consectetur';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->indexName = 'recusandae';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum::NO_ROTATION;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->retryOptions = new AmazonopensearchserviceRetryOptions();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->retryOptions->durationInSeconds = 53427;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->roleARN = 'a';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->bucketARN = 'libero';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 13948;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 11427;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'deleniti';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'impedit';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::GZIP;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'fugit';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->errorOutputPrefix = 'accusamus';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->prefix = 'inventore';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->s3Update->roleARN = 'non';
    $request->updateDestinationInput->amazonopensearchserviceDestinationUpdate->typeName = 'et';
    $request->updateDestinationInput->currentDeliveryStreamVersionId = 'dolorum';
    $request->updateDestinationInput->deliveryStreamName = 'laborum';
    $request->updateDestinationInput->destinationId = 'placeat';
    $request->updateDestinationInput->elasticsearchDestinationUpdate = new ElasticsearchDestinationUpdate();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->bufferingHints = new ElasticsearchBufferingHints();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->bufferingHints->intervalInSeconds = 245367;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->bufferingHints->sizeInMBs = 432148;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'autem';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'nobis';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->clusterEndpoint = 'quas';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->domainARN = 'assumenda';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->indexName = 'nulla';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum::ONE_HOUR;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->updateDestinationInput->elasticsearchDestinationUpdate->retryOptions = new ElasticsearchRetryOptions();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->retryOptions->durationInSeconds = 96549;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->roleARN = 'tempora';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->bucketARN = 'numquam';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 131482;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 591935;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'ipsa';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'molestiae';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::GZIP;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'odio';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->errorOutputPrefix = 'eius';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->prefix = 'esse';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->s3Update->roleARN = 'esse';
    $request->updateDestinationInput->elasticsearchDestinationUpdate->typeName = 'rem';
    $request->updateDestinationInput->extendedS3DestinationUpdate = new ExtendedS3DestinationUpdate();
    $request->updateDestinationInput->extendedS3DestinationUpdate->bucketARN = 'fuga';
    $request->updateDestinationInput->extendedS3DestinationUpdate->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->extendedS3DestinationUpdate->bufferingHints->intervalInSeconds = 442015;
    $request->updateDestinationInput->extendedS3DestinationUpdate->bufferingHints->sizeInMBs = 695626;
    $request->updateDestinationInput->extendedS3DestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->extendedS3DestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'fugiat';
    $request->updateDestinationInput->extendedS3DestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'ut';
    $request->updateDestinationInput->extendedS3DestinationUpdate->compressionFormat = CompressionFormatEnum::ZIP;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration = new DataFormatConversionConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->enabled = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration = new InputFormatConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer = new Deserializer();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe = new HiveJsonSerDe();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe->timestampFormats = [
        'assumenda',
        'eos',
    ];
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe = new OpenXJsonSerDe();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->caseInsensitive = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->columnToJsonKeyMappings = [
        'quisquam' => 'veritatis',
        'ipsa' => 'id',
        'quidem' => 'neque',
    ];
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->convertDotsInJsonKeysToUnderscores = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration = new OutputFormatConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer = new Serializer();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe = new OrcSerDe();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->blockSizeBytes = 778696;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterColumns = [
        'quo',
        'fuga',
        'eius',
        'eos',
    ];
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterFalsePositiveProbability = 3738.13;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->compression = OrcCompressionEnum::NONE;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->dictionaryKeyThreshold = 5876;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->enablePadding = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->formatVersion = OrcFormatVersionEnum::V011;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->paddingTolerance = 2728.22;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->rowIndexStride = 892050;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->stripeSizeBytes = 370853;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe = new ParquetSerDe();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->blockSizeBytes = 133465;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->compression = ParquetCompressionEnum::UNCOMPRESSED;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->enableDictionaryCompression = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->maxPaddingBytes = 779192;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->pageSizeBytes = 459856;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->writerVersion = ParquetWriterVersionEnum::V2;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration = new SchemaConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->catalogId = 'aperiam';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->databaseName = 'distinctio';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->region = 'quod';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->roleARN = 'dignissimos';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->tableName = 'inventore';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dataFormatConversionConfiguration->schemaConfiguration->versionId = 'nihil';
    $request->updateDestinationInput->extendedS3DestinationUpdate->dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dynamicPartitioningConfiguration->enabled = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->dynamicPartitioningConfiguration->retryOptions = new RetryOptions();
    $request->updateDestinationInput->extendedS3DestinationUpdate->dynamicPartitioningConfiguration->retryOptions->durationInSeconds = 518835;
    $request->updateDestinationInput->extendedS3DestinationUpdate->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->extendedS3DestinationUpdate->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'accusamus';
    $request->updateDestinationInput->extendedS3DestinationUpdate->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->extendedS3DestinationUpdate->errorOutputPrefix = 'aliquam';
    $request->updateDestinationInput->extendedS3DestinationUpdate->prefix = 'odio';
    $request->updateDestinationInput->extendedS3DestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->updateDestinationInput->extendedS3DestinationUpdate->roleARN = 'commodi';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupMode = S3BackupModeEnum::ENABLED;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate = new S3DestinationUpdate();
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->bucketARN = 'dolores';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->bufferingHints->intervalInSeconds = 645570;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->bufferingHints->sizeInMBs = 475289;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->logGroupName = 'accusantium';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->logStreamName = 'porro';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->compressionFormat = CompressionFormatEnum::ZIP;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'quas';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->errorOutputPrefix = 'praesentium';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->prefix = 'consequuntur';
    $request->updateDestinationInput->extendedS3DestinationUpdate->s3BackupUpdate->roleARN = 'deleniti';
    $request->updateDestinationInput->httpEndpointDestinationUpdate = new HttpEndpointDestinationUpdate();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->bufferingHints = new HttpEndpointBufferingHints();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->bufferingHints->intervalInSeconds = 143829;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->bufferingHints->sizeInMBs = 681393;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'mollitia';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'incidunt';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->endpointConfiguration = new HttpEndpointConfiguration();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->endpointConfiguration->accessKey = 'atque';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->endpointConfiguration->name = 'Cathy Huel';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->endpointConfiguration->url = 'consequuntur';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
    ];
    $request->updateDestinationInput->httpEndpointDestinationUpdate->requestConfiguration = new HttpEndpointRequestConfiguration();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->requestConfiguration->commonAttributes = [
        new HttpEndpointCommonAttribute(),
    ];
    $request->updateDestinationInput->httpEndpointDestinationUpdate->requestConfiguration->contentEncoding = ContentEncodingEnum::GZIP;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->retryOptions = new HttpEndpointRetryOptions();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->retryOptions->durationInSeconds = 578922;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->roleARN = 'atque';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3BackupMode = HttpEndpointS3BackupModeEnum::FAILED_DATA_ONLY;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->bucketARN = 'esse';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 910545;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 882042;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'veritatis';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'esse';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::HADOOP_SNAPPY;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'nam';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->errorOutputPrefix = 'vero';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->prefix = 'aliquid';
    $request->updateDestinationInput->httpEndpointDestinationUpdate->s3Update->roleARN = 'quasi';
    $request->updateDestinationInput->redshiftDestinationUpdate = new RedshiftDestinationUpdate();
    $request->updateDestinationInput->redshiftDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->redshiftDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->redshiftDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'saepe';
    $request->updateDestinationInput->redshiftDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'vel';
    $request->updateDestinationInput->redshiftDestinationUpdate->clusterJDBCURL = 'harum';
    $request->updateDestinationInput->redshiftDestinationUpdate->copyCommand = new CopyCommand();
    $request->updateDestinationInput->redshiftDestinationUpdate->copyCommand->copyOptions = 'molestiae';
    $request->updateDestinationInput->redshiftDestinationUpdate->copyCommand->dataTableColumns = 'rerum';
    $request->updateDestinationInput->redshiftDestinationUpdate->copyCommand->dataTableName = 'occaecati';
    $request->updateDestinationInput->redshiftDestinationUpdate->password = 'minima';
    $request->updateDestinationInput->redshiftDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->redshiftDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->redshiftDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->updateDestinationInput->redshiftDestinationUpdate->retryOptions = new RedshiftRetryOptions();
    $request->updateDestinationInput->redshiftDestinationUpdate->retryOptions->durationInSeconds = 756779;
    $request->updateDestinationInput->redshiftDestinationUpdate->roleARN = 'sit';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupMode = RedshiftS3BackupModeEnum::ENABLED;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate = new S3DestinationUpdate();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->bucketARN = 'tempore';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->bufferingHints->intervalInSeconds = 240020;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->bufferingHints->sizeInMBs = 766964;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->logGroupName = 'consequuntur';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->cloudWatchLoggingOptions->logStreamName = 'consequatur';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->compressionFormat = CompressionFormatEnum::SNAPPY;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'quaerat';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->errorOutputPrefix = 'sapiente';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->prefix = 'consectetur';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3BackupUpdate->roleARN = 'esse';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->bucketARN = 'blanditiis';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 590984;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 953722;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'nulla';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'quas';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::ZIP;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'quasi';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->errorOutputPrefix = 'a';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->prefix = 'error';
    $request->updateDestinationInput->redshiftDestinationUpdate->s3Update->roleARN = 'sint';
    $request->updateDestinationInput->redshiftDestinationUpdate->username = 'pariatur';
    $request->updateDestinationInput->s3DestinationUpdate = new UpdateDestinationInputS3DestinationUpdate();
    $request->updateDestinationInput->s3DestinationUpdate->bucketARN = 'possimus';
    $request->updateDestinationInput->s3DestinationUpdate->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->s3DestinationUpdate->bufferingHints->intervalInSeconds = 157632;
    $request->updateDestinationInput->s3DestinationUpdate->bufferingHints->sizeInMBs = 908844;
    $request->updateDestinationInput->s3DestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->s3DestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->s3DestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'asperiores';
    $request->updateDestinationInput->s3DestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'facere';
    $request->updateDestinationInput->s3DestinationUpdate->compressionFormat = CompressionFormatEnum::UNCOMPRESSED;
    $request->updateDestinationInput->s3DestinationUpdate->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->s3DestinationUpdate->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->s3DestinationUpdate->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'consequuntur';
    $request->updateDestinationInput->s3DestinationUpdate->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->s3DestinationUpdate->errorOutputPrefix = 'quasi';
    $request->updateDestinationInput->s3DestinationUpdate->prefix = 'similique';
    $request->updateDestinationInput->s3DestinationUpdate->roleARN = 'culpa';
    $request->updateDestinationInput->splunkDestinationUpdate = new SplunkDestinationUpdate();
    $request->updateDestinationInput->splunkDestinationUpdate->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->splunkDestinationUpdate->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->splunkDestinationUpdate->cloudWatchLoggingOptions->logGroupName = 'aliquid';
    $request->updateDestinationInput->splunkDestinationUpdate->cloudWatchLoggingOptions->logStreamName = 'tenetur';
    $request->updateDestinationInput->splunkDestinationUpdate->hecAcknowledgmentTimeoutInSeconds = 62713;
    $request->updateDestinationInput->splunkDestinationUpdate->hecEndpoint = 'earum';
    $request->updateDestinationInput->splunkDestinationUpdate->hecEndpointType = HECEndpointTypeEnum::RAW;
    $request->updateDestinationInput->splunkDestinationUpdate->hecToken = 'in';
    $request->updateDestinationInput->splunkDestinationUpdate->processingConfiguration = new ProcessingConfiguration();
    $request->updateDestinationInput->splunkDestinationUpdate->processingConfiguration->enabled = false;
    $request->updateDestinationInput->splunkDestinationUpdate->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->updateDestinationInput->splunkDestinationUpdate->retryOptions = new SplunkRetryOptions();
    $request->updateDestinationInput->splunkDestinationUpdate->retryOptions->durationInSeconds = 727697;
    $request->updateDestinationInput->splunkDestinationUpdate->s3BackupMode = SplunkS3BackupModeEnum::ALL_EVENTS;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update = new S3DestinationUpdate();
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->bucketARN = 'soluta';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->bufferingHints = new BufferingHints();
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->bufferingHints->intervalInSeconds = 33304;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->bufferingHints->sizeInMBs = 306986;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->cloudWatchLoggingOptions->enabled = false;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->cloudWatchLoggingOptions->logGroupName = 'sapiente';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->cloudWatchLoggingOptions->logStreamName = 'dicta';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->compressionFormat = CompressionFormatEnum::GZIP;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'reprehenderit';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->errorOutputPrefix = 'ullam';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->prefix = 'nisi';
    $request->updateDestinationInput->splunkDestinationUpdate->s3Update->roleARN = 'aut';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UpdateDestinationXAmzTargetEnum::FIREHOSE20150804_UPDATE_DESTINATION;

    $response = $sdk->sdk->updateDestination($request);

    if ($response->updateDestinationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
