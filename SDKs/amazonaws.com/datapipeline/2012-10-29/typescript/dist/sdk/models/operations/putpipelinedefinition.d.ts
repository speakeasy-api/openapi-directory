import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPipelineDefinitionXAmzTargetEnum {
    DataPipelinePutPipelineDefinition = "DataPipeline.PutPipelineDefinition"
}
export declare class PutPipelineDefinitionRequest extends SpeakeasyBase {
    putPipelineDefinitionInput: shared.PutPipelineDefinitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPipelineDefinitionXAmzTargetEnum;
}
export declare class PutPipelineDefinitionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    putPipelineDefinitionOutput?: shared.PutPipelineDefinitionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
