import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state the pipe should be in.
 */
export declare enum UpdatePipeRequestBodyDesiredStateEnum {
    Running = "RUNNING",
    Stopped = "STOPPED"
}
/**
 * The parameters required to set up enrichment on your pipe.
 */
export declare class UpdatePipeRequestBodyEnrichmentParameters extends SpeakeasyBase {
    httpParameters?: shared.PipeEnrichmentHttpParameters;
    inputTemplate?: string;
}
/**
 * The parameters required to set up a source for your pipe.
 */
export declare class UpdatePipeRequestBodySourceParameters extends SpeakeasyBase {
    activeMQBrokerParameters?: shared.UpdatePipeSourceActiveMQBrokerParameters;
    dynamoDBStreamParameters?: shared.UpdatePipeSourceDynamoDBStreamParameters;
    filterCriteria?: shared.FilterCriteria;
    kinesisStreamParameters?: shared.UpdatePipeSourceKinesisStreamParameters;
    managedStreamingKafkaParameters?: shared.UpdatePipeSourceManagedStreamingKafkaParameters;
    rabbitMQBrokerParameters?: shared.UpdatePipeSourceRabbitMQBrokerParameters;
    selfManagedKafkaParameters?: shared.UpdatePipeSourceSelfManagedKafkaParameters;
    sqsQueueParameters?: shared.UpdatePipeSourceSqsQueueParameters;
}
/**
 * The parameters required to set up a target for your pipe.
 */
export declare class UpdatePipeRequestBodyTargetParameters extends SpeakeasyBase {
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
export declare class UpdatePipeRequestBody extends SpeakeasyBase {
    /**
     * A description of the pipe.
     */
    description?: string;
    /**
     * The state the pipe should be in.
     */
    desiredState?: UpdatePipeRequestBodyDesiredStateEnum;
    /**
     * The ARN of the enrichment resource.
     */
    enrichment?: string;
    /**
     * The parameters required to set up enrichment on your pipe.
     */
    enrichmentParameters?: UpdatePipeRequestBodyEnrichmentParameters;
    /**
     * The ARN of the role that allows the pipe to send data to the target.
     */
    roleArn: string;
    /**
     * The parameters required to set up a source for your pipe.
     */
    sourceParameters?: UpdatePipeRequestBodySourceParameters;
    /**
     * The ARN of the target resource.
     */
    target?: string;
    /**
     * The parameters required to set up a target for your pipe.
     */
    targetParameters?: UpdatePipeRequestBodyTargetParameters;
}
export declare class UpdatePipeRequest extends SpeakeasyBase {
    /**
     * The name of the pipe.
     */
    name: string;
    requestBody: UpdatePipeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePipeResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updatePipeResponse?: shared.UpdatePipeResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
