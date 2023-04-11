import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Answering Machine Detection config
 */
export declare class UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig extends SpeakeasyBase {
    enableAnswerMachineDetection?: boolean;
}
export declare class UpdateCampaignOutboundCallConfigRequestBody extends SpeakeasyBase {
    /**
     * Answering Machine Detection config
     */
    answerMachineDetectionConfig?: UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig;
    /**
     * The identifier of the contact flow for the outbound call.
     */
    connectContactFlowId?: string;
    /**
     * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
     */
    connectSourcePhoneNumber?: string;
}
export declare class UpdateCampaignOutboundCallConfigRequest extends SpeakeasyBase {
    requestBody: UpdateCampaignOutboundCallConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    id: string;
}
export declare class UpdateCampaignOutboundCallConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
