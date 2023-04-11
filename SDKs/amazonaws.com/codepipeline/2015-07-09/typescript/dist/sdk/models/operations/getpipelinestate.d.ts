import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPipelineStateXAmzTargetEnum {
    CodePipeline20150709GetPipelineState = "CodePipeline_20150709.GetPipelineState"
}
export declare class GetPipelineStateRequest extends SpeakeasyBase {
    getPipelineStateInput: shared.GetPipelineStateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineStateXAmzTargetEnum;
}
export declare class GetPipelineStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPipelineStateOutput?: shared.GetPipelineStateOutput;
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
