import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPipelineXAmzTargetEnum {
    CodePipeline20150709GetPipeline = "CodePipeline_20150709.GetPipeline"
}
export declare class GetPipelineRequest extends SpeakeasyBase {
    getPipelineInput: shared.GetPipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineXAmzTargetEnum;
}
export declare class GetPipelineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPipelineOutput?: shared.GetPipelineOutput;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * PipelineVersionNotFoundException
     */
    pipelineVersionNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
