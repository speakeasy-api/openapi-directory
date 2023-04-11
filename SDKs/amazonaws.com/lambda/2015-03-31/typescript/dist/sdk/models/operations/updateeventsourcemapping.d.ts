import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 */
export declare class UpdateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
/**
 *  Specific configuration settings for a DocumentDB event source.
 */
export declare class UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig extends SpeakeasyBase {
    collectionName?: string;
    databaseName?: string;
    fullDocument?: shared.FullDocumentEnum;
}
/**
 *  An object that contains the filters for an event source.
 */
export declare class UpdateEventSourceMappingRequestBodyFilterCriteria extends SpeakeasyBase {
    filters?: shared.Filter[];
}
/**
 * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
 */
export declare class UpdateEventSourceMappingRequestBodyScalingConfig extends SpeakeasyBase {
    maximumConcurrency?: number;
}
export declare class UpdateEventSourceMappingRequestBody extends SpeakeasyBase {
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
    destinationConfig?: UpdateEventSourceMappingRequestBodyDestinationConfig;
    /**
     *  Specific configuration settings for a DocumentDB event source.
     */
    documentDBEventSourceConfig?: UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
    /**
     * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>
     */
    enabled?: boolean;
    /**
     *  An object that contains the filters for an event source.
     */
    filterCriteria?: UpdateEventSourceMappingRequestBodyFilterCriteria;
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
     */
    functionName?: string;
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
     * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
     */
    scalingConfig?: UpdateEventSourceMappingRequestBodyScalingConfig;
    /**
     * An array of authentication protocols or VPC components required to secure your event source.
     */
    sourceAccessConfigurations?: shared.SourceAccessConfiguration[];
    /**
     * (Streams only) The duration in seconds of a processing window. The range is between 1 second and 900 seconds.
     */
    tumblingWindowInSeconds?: number;
}
export declare class UpdateEventSourceMappingRequest extends SpeakeasyBase {
    requestBody: UpdateEventSourceMappingRequestBody;
    /**
     * The identifier of the event source mapping.
     */
    uuid: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEventSourceMappingResponse extends SpeakeasyBase {
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
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
