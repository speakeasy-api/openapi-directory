import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ValidatePipelineDefinitionXAmzTargetEnum {
    DataPipelineValidatePipelineDefinition = "DataPipeline.ValidatePipelineDefinition"
}
export declare class ValidatePipelineDefinitionRequest extends SpeakeasyBase {
    validatePipelineDefinitionInput: shared.ValidatePipelineDefinitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidatePipelineDefinitionXAmzTargetEnum;
}
export declare class ValidatePipelineDefinitionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    validatePipelineDefinitionOutput?: shared.ValidatePipelineDefinitionOutput;
}
