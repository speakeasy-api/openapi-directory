import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetryPipelineExecutionXAmzTargetEnum {
    SageMakerRetryPipelineExecution = "SageMaker.RetryPipelineExecution"
}
export declare class RetryPipelineExecutionRequest extends SpeakeasyBase {
    retryPipelineExecutionRequest: shared.RetryPipelineExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryPipelineExecutionXAmzTargetEnum;
}
export declare class RetryPipelineExecutionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    retryPipelineExecutionResponse?: shared.RetryPipelineExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
