import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ActivatePipelineXAmzTargetEnum {
    DataPipelineActivatePipeline = "DataPipeline.ActivatePipeline"
}
export declare class ActivatePipelineRequest extends SpeakeasyBase {
    activatePipelineInput: shared.ActivatePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ActivatePipelineXAmzTargetEnum;
}
export declare class ActivatePipelineResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activatePipelineOutput?: Record<string, any>;
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * PipelineDeletedException
     */
    pipelineDeletedException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
