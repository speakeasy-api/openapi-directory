import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AcceptInvitationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID for the account that sent the invitation.
     */
    administratorAccountId?: string;
    /**
     * The unique identifier for the invitation to accept.
     */
    invitationId: string;
    /**
     * (Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.
     */
    masterAccount?: string;
}
export declare class AcceptInvitationRequest extends SpeakeasyBase {
    requestBody: AcceptInvitationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptInvitationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptInvitationResponse?: Record<string, any>;
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
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
