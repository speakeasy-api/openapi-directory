import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the update action for the share request.
 */
export declare enum UpdateAssessmentFrameworkShareRequestBodyActionEnum {
    Accept = "ACCEPT",
    Decline = "DECLINE",
    Revoke = "REVOKE"
}
/**
 * Specifies whether the share request is a sent request or a received request.
 */
export declare enum UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
export declare class UpdateAssessmentFrameworkShareRequestBody extends SpeakeasyBase {
    /**
     * Specifies the update action for the share request.
     */
    action: UpdateAssessmentFrameworkShareRequestBodyActionEnum;
    /**
     * Specifies whether the share request is a sent request or a received request.
     */
    requestType: UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum;
}
export declare class UpdateAssessmentFrameworkShareRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentFrameworkShareRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier for the share request.
     */
    requestId: string;
}
export declare class UpdateAssessmentFrameworkShareResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateAssessmentFrameworkShareResponse?: shared.UpdateAssessmentFrameworkShareResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
