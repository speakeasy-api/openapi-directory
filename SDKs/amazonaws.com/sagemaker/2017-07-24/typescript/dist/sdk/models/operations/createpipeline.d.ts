import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePipelineXAmzTargetEnum {
    SageMakerCreatePipeline = "SageMaker.CreatePipeline"
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    createPipelineRequest: shared.CreatePipelineRequest;
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
    createPipelineResponse?: shared.CreatePipelineResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
