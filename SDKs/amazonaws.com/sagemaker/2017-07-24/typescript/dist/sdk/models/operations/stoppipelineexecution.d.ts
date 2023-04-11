import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPipelineExecutionXAmzTargetEnum {
    SageMakerStopPipelineExecution = "SageMaker.StopPipelineExecution"
}
export declare class StopPipelineExecutionRequest extends SpeakeasyBase {
    stopPipelineExecutionRequest: shared.StopPipelineExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPipelineExecutionXAmzTargetEnum;
}
export declare class StopPipelineExecutionResponse extends SpeakeasyBase {
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
    stopPipelineExecutionResponse?: shared.StopPipelineExecutionResponse;
}
