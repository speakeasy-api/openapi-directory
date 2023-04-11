import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709GetPipelineExecution = "CodePipeline_20150709.GetPipelineExecution"
}
export declare class GetPipelineExecutionRequest extends SpeakeasyBase {
    getPipelineExecutionInput: shared.GetPipelineExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineExecutionXAmzTargetEnum;
}
export declare class GetPipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPipelineExecutionOutput?: shared.GetPipelineExecutionOutput;
    /**
     * PipelineExecutionNotFoundException
     */
    pipelineExecutionNotFoundException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
