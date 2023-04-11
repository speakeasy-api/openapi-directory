import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePipelineXAmzTargetEnum {
    SageMakerUpdatePipeline = "SageMaker.UpdatePipeline"
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    updatePipelineRequest: shared.UpdatePipelineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineXAmzTargetEnum;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updatePipelineResponse?: shared.UpdatePipelineResponse;
}
