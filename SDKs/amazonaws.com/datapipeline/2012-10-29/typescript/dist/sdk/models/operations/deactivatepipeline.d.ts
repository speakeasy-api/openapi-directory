import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeactivatePipelineXAmzTargetEnum {
    DataPipelineDeactivatePipeline = "DataPipeline.DeactivatePipeline"
}
export declare class DeactivatePipelineRequest extends SpeakeasyBase {
    deactivatePipelineInput: shared.DeactivatePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeactivatePipelineXAmzTargetEnum;
}
export declare class DeactivatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deactivatePipelineOutput?: Record<string, any>;
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
