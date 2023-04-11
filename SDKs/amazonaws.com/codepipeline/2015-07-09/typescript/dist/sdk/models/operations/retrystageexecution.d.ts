import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetryStageExecutionXAmzTargetEnum {
    CodePipeline20150709RetryStageExecution = "CodePipeline_20150709.RetryStageExecution"
}
export declare class RetryStageExecutionRequest extends SpeakeasyBase {
    retryStageExecutionInput: shared.RetryStageExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryStageExecutionXAmzTargetEnum;
}
export declare class RetryStageExecutionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * NotLatestPipelineExecutionException
     */
    notLatestPipelineExecutionException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    retryStageExecutionOutput?: shared.RetryStageExecutionOutput;
    /**
     * StageNotRetryableException
     */
    stageNotRetryableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StageNotFoundException
     */
    stageNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
