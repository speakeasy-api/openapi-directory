import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPipelineDefinitionXAmzTargetEnum {
    DataPipelineGetPipelineDefinition = "DataPipeline.GetPipelineDefinition"
}
export declare class GetPipelineDefinitionRequest extends SpeakeasyBase {
    getPipelineDefinitionInput: shared.GetPipelineDefinitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineDefinitionXAmzTargetEnum;
}
export declare class GetPipelineDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPipelineDefinitionOutput?: shared.GetPipelineDefinitionOutput;
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
