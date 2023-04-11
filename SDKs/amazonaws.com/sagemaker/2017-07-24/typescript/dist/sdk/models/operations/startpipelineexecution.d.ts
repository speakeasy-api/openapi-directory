import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartPipelineExecutionXAmzTargetEnum {
    SageMakerStartPipelineExecution = "SageMaker.StartPipelineExecution"
}
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    startPipelineExecutionRequest: shared.StartPipelineExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPipelineExecutionXAmzTargetEnum;
}
export declare class StartPipelineExecutionResponse extends SpeakeasyBase {
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
    startPipelineExecutionResponse?: shared.StartPipelineExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
