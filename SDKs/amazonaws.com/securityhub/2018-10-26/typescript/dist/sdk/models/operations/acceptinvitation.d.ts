import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AcceptInvitationRequestBody extends SpeakeasyBase {
    /**
     * The identifier of the invitation sent from the Security Hub administrator account.
     */
    invitationId: string;
    /**
     * The account ID of the Security Hub administrator account that sent the invitation.
     */
    masterId: string;
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
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
