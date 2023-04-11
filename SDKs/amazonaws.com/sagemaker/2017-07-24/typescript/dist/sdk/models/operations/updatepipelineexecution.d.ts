import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePipelineExecutionXAmzTargetEnum {
    SageMakerUpdatePipelineExecution = "SageMaker.UpdatePipelineExecution"
}
export declare class UpdatePipelineExecutionRequest extends SpeakeasyBase {
    updatePipelineExecutionRequest: shared.UpdatePipelineExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineExecutionXAmzTargetEnum;
}
export declare class UpdatePipelineExecutionResponse extends SpeakeasyBase {
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
    updatePipelineExecutionResponse?: shared.UpdatePipelineExecutionResponse;
}
