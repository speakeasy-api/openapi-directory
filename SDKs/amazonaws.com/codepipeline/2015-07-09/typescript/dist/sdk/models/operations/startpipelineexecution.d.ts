import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StartPipelineExecution = "CodePipeline_20150709.StartPipelineExecution"
}
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    startPipelineExecutionInput: shared.StartPipelineExecutionInput;
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
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    startPipelineExecutionOutput?: shared.StartPipelineExecutionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
