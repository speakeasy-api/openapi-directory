import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state the pipe should be in.
 */
export declare enum CreatePipeRequestBodyDesiredStateEnum {
    Running = "RUNNING",
    Stopped = "STOPPED"
}
/**
 * The parameters required to set up enrichment on your pipe.
 */
export declare class CreatePipeRequestBodyEnrichmentParameters extends SpeakeasyBase {
    httpParameters?: shared.PipeEnrichmentHttpParameters;
    inputTemplate?: string;
}
/**
 * The parameters required to set up a source for your pipe.
 */
export declare class CreatePipeRequestBodySourceParameters extends SpeakeasyBase {
    activeMQBrokerParameters?: shared.PipeSourceActiveMQBrokerParameters;
    dynamoDBStreamParameters?: shared.PipeSourceDynamoDBStreamParameters;
    filterCriteria?: shared.FilterCriteria;
    kinesisStreamParameters?: shared.PipeSourceKinesisStreamParameters;
    managedStreamingKafkaParameters?: shared.PipeSourceManagedStreamingKafkaParameters;
    rabbitMQBrokerParameters?: shared.PipeSourceRabbitMQBrokerParameters;
    selfManagedKafkaParameters?: shared.PipeSourceSelfManagedKafkaParameters;
    sqsQueueParameters?: shared.PipeSourceSqsQueueParameters;
}
/**
 * The parameters required to set up a target for your pipe.
 */
export declare class CreatePipeRequestBodyTargetParameters extends SpeakeasyBase {
    batchJobParameters?: shared.PipeTargetBatchJobParameters;
    cloudWatchLogsParameters?: shared.PipeTargetCloudWatchLogsParameters;
    ecsTaskParameters?: shared.PipeTargetEcsTaskParameters;
    eventBridgeEventBusParameters?: shared.PipeTargetEventBridgeEventBusParameters;
    httpParameters?: shared.PipeTargetHttpParameters;
    inputTemplate?: string;
    kinesisStreamParameters?: shared.PipeTargetKinesisStreamParameters;
    lambdaFunctionParameters?: shared.PipeTargetLambdaFunctionParameters;
    redshiftDataParameters?: shared.PipeTargetRedshiftDataParameters;
    sageMakerPipelineParameters?: shared.PipeTargetSageMakerPipelineParameters;
    sqsQueueParameters?: shared.PipeTargetSqsQueueParameters;
    stepFunctionStateMachineParameters?: shared.PipeTargetStateMachineParameters;
}
export declare class CreatePipeRequestBody extends SpeakeasyBase {
    /**
     * A description of the pipe.
     */
    description?: string;
    /**
     * The state the pipe should be in.
     */
    desiredState?: CreatePipeRequestBodyDesiredStateEnum;
    /**
     * The ARN of the enrichment resource.
     */
    enrichment?: string;
    /**
     * The parameters required to set up enrichment on your pipe.
     */
    enrichmentParameters?: CreatePipeRequestBodyEnrichmentParameters;
    /**
     * The ARN of the role that allows the pipe to send data to the target.
     */
    roleArn: string;
    /**
     * The ARN of the source resource.
     */
    source: string;
    /**
     * The parameters required to set up a source for your pipe.
     */
    sourceParameters?: CreatePipeRequestBodySourceParameters;
    /**
     * The list of key-value pairs to associate with the pipe.
     */
    tags?: Record<string, string>;
    /**
     * The ARN of the target resource.
     */
    target: string;
    /**
     * The parameters required to set up a target for your pipe.
     */
    targetParameters?: CreatePipeRequestBodyTargetParameters;
}
export declare class CreatePipeRequest extends SpeakeasyBase {
    /**
     * The name of the pipe.
     */
    name: string;
    requestBody: CreatePipeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePipeResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createPipeResponse?: shared.CreatePipeResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
