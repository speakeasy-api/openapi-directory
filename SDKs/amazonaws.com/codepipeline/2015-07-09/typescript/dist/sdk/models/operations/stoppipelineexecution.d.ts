import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StopPipelineExecution = "CodePipeline_20150709.StopPipelineExecution"
}
export declare class StopPipelineExecutionRequest extends SpeakeasyBase {
    stopPipelineExecutionInput: shared.StopPipelineExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPipelineExecutionXAmzTargetEnum;
}
export declare class StopPipelineExecutionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * DuplicatedStopRequestException
     */
    duplicatedStopRequestException?: any;
    /**
     * PipelineExecutionNotStoppableException
     */
    pipelineExecutionNotStoppableException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopPipelineExecutionOutput?: shared.StopPipelineExecutionOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
