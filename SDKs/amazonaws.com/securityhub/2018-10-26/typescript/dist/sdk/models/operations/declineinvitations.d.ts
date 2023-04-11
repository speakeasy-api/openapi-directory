import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeclineInvitationsRequestBody extends SpeakeasyBase {
    /**
     * The list of prospective member account IDs for which to decline an invitation.
     */
    accountIds: string[];
}
export declare class DeclineInvitationsRequest extends SpeakeasyBase {
    requestBody: DeclineInvitationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeclineInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    declineInvitationsResponse?: shared.DeclineInvitationsResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
