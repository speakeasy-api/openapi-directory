import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteInvitationsRequestBody extends SpeakeasyBase {
    /**
     * The list of member account IDs that received the invitations you want to delete.
     */
    accountIds: string[];
}
export declare class DeleteInvitationsRequest extends SpeakeasyBase {
    requestBody: DeleteInvitationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteInvitationsResponse?: shared.DeleteInvitationsResponse;
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
