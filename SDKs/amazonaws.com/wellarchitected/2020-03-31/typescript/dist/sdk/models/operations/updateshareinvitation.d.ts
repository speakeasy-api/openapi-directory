import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Share invitation action taken by contributor.
 */
export declare enum UpdateShareInvitationRequestBodyShareInvitationActionEnum {
    Accept = "ACCEPT",
    Reject = "REJECT"
}
export declare class UpdateShareInvitationRequestBody extends SpeakeasyBase {
    /**
     * Share invitation action taken by contributor.
     */
    shareInvitationAction: UpdateShareInvitationRequestBodyShareInvitationActionEnum;
}
export declare class UpdateShareInvitationRequest extends SpeakeasyBase {
    requestBody: UpdateShareInvitationRequestBody;
    /**
     * The ID assigned to the share invitation.
     */
    shareInvitationId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateShareInvitationResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateShareInvitationOutput?: shared.UpdateShareInvitationOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
