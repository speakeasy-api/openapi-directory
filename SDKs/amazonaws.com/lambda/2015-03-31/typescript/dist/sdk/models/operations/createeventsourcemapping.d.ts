import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 */
export declare class CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig extends SpeakeasyBase {
    consumerGroupId?: string;
}
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 */
export declare class CreateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
/**
 *  Specific configuration settings for a DocumentDB event source.
 */
export declare class CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig extends SpeakeasyBase {
    collectionName?: string;
    databaseName?: string;
    fullDocument?: shared.FullDocumentEnum;
}
/**
 *  An object that contains the filters for an event source.
 */
export declare class CreateEventSourceMappingRequestBodyFilterCriteria extends SpeakeasyBase {
    filters?: shared.Filter[];
}
/**
 * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
 */
export declare class CreateEventSourceMappingRequestBodyScalingConfig extends SpeakeasyBase {
    maximumConcurrency?: number;
}
/**
 * The self-managed Apache Kafka cluster for your event source.
 */
export declare class CreateEventSourceMappingRequestBodySelfManagedEventSource extends SpeakeasyBase {
    endpoints?: Record<string, string[]>;
}
/**
 * Specific configuration settings for a self-managed Apache Kafka event source.
 */
export declare class CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig extends SpeakeasyBase {
    consumerGroupId?: string;
}
/**
 * The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams.
 */
export declare enum CreateEventSourceMappingRequestBodyStartingPositionEnum {
    TrimHorizon = "TRIM_HORIZON",
    Latest = "LATEST",
    AtTimestamp = "AT_TIMESTAMP"
}
export declare class CreateEventSourceMappingRequestBody extends SpeakeasyBase {
    /**
     * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
     */
    amazonManagedKafkaEventSourceConfig?: CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig;
    /**
     * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> </ul>
     */
    batchSize?: number;
    /**
     * (Streams only) If the function returns an error, split the batch in two and retry.
     */
    bisectBatchOnFunctionError?: boolean;
    /**
     * A configuration object that specifies the destination of an event after Lambda processes it.
     */
    destinationConfig?: CreateEventSourceMappingRequestBodyDestinationConfig;
    /**
     *  Specific configuration settings for a DocumentDB event source.
     */
    documentDBEventSourceConfig?: CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
    /**
     * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>
     */
    enabled?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> </ul>
     */
    eventSourceArn?: string;
    /**
     *  An object that contains the filters for an event source.
     */
    filterCriteria?: CreateEventSourceMappingRequestBodyFilterCriteria;
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
     */
    functionName: string;
    /**
     * (Streams and Amazon SQS) A list of current response type enums applied to the event source mapping.
     */
    functionResponseTypes?: shared.FunctionResponseTypeEnum[];
    /**
     * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, and Amazon MQ event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
     */
    maximumBatchingWindowInSeconds?: number;
    /**
     * (Streams only) Discard records older than the specified age. The default value is infinite (-1).
     */
    maximumRecordAgeInSeconds?: number;
    /**
     * (Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
     */
    maximumRetryAttempts?: number;
    /**
     * (Streams only) The number of batches to process from each shard concurrently.
     */
    parallelizationFactor?: number;
    /**
     *  (MQ) The name of the Amazon MQ broker destination queue to consume.
     */
    queues?: string[];
    /**
     * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
     */
    scalingConfig?: CreateEventSourceMappingRequestBodyScalingConfig;
    /**
     * The self-managed Apache Kafka cluster for your event source.
     */
    selfManagedEventSource?: CreateEventSourceMappingRequestBodySelfManagedEventSource;
    /**
     * Specific configuration settings for a self-managed Apache Kafka event source.
     */
    selfManagedKafkaEventSourceConfig?: CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig;
    /**
     * An array of authentication protocols or VPC components required to secure your event source.
     */
    sourceAccessConfigurations?: shared.SourceAccessConfiguration[];
    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams.
     */
    startingPosition?: CreateEventSourceMappingRequestBodyStartingPositionEnum;
    /**
     * With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading.
     */
    startingPositionTimestamp?: Date;
    /**
     * The name of the Kafka topic.
     */
    topics?: string[];
    /**
     * (Streams only) The duration in seconds of a processing window. The range is between 1 second and 900 seconds.
     */
    tumblingWindowInSeconds?: number;
}
export declare class CreateEventSourceMappingRequest extends SpeakeasyBase {
    requestBody: CreateEventSourceMappingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
