import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendPipelineExecutionStepFailureXAmzTargetEnum {
    SageMakerSendPipelineExecutionStepFailure = "SageMaker.SendPipelineExecutionStepFailure"
}
export declare class SendPipelineExecutionStepFailureRequest extends SpeakeasyBase {
    sendPipelineExecutionStepFailureRequest: shared.SendPipelineExecutionStepFailureRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendPipelineExecutionStepFailureXAmzTargetEnum;
}
export declare class SendPipelineExecutionStepFailureResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    sendPipelineExecutionStepFailureResponse?: shared.SendPipelineExecutionStepFailureResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
