import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendPipelineExecutionStepSuccessXAmzTargetEnum {
    SageMakerSendPipelineExecutionStepSuccess = "SageMaker.SendPipelineExecutionStepSuccess"
}
export declare class SendPipelineExecutionStepSuccessRequest extends SpeakeasyBase {
    sendPipelineExecutionStepSuccessRequest: shared.SendPipelineExecutionStepSuccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendPipelineExecutionStepSuccessXAmzTargetEnum;
}
export declare class SendPipelineExecutionStepSuccessResponse extends SpeakeasyBase {
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
    sendPipelineExecutionStepSuccessResponse?: shared.SendPipelineExecutionStepSuccessResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
