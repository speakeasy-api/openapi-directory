import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePipelineXAmzTargetEnum {
    SageMakerDeletePipeline = "SageMaker.DeletePipeline"
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    deletePipelineRequest: shared.DeletePipelineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePipelineXAmzTargetEnum;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePipelineResponse?: shared.DeletePipelineResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
