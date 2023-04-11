import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AcceptAdministratorInvitationRequestBody extends SpeakeasyBase {
    /**
     * The account ID of the Security Hub administrator account that sent the invitation.
     */
    administratorId: string;
    /**
     * The identifier of the invitation sent from the Security Hub administrator account.
     */
    invitationId: string;
}
export declare class AcceptAdministratorInvitationRequest extends SpeakeasyBase {
    requestBody: AcceptAdministratorInvitationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptAdministratorInvitationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptAdministratorInvitationResponse?: Record<string, any>;
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
