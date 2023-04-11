import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePipelineXAmzTargetEnum {
    DataPipelineCreatePipeline = "DataPipeline.CreatePipeline"
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    createPipelineInput: shared.CreatePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePipelineXAmzTargetEnum;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPipelineOutput?: shared.CreatePipelineOutput;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
