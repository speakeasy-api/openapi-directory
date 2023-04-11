import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMembersRequestBody extends SpeakeasyBase {
    /**
     * The list of accounts to associate with the Security Hub administrator account. For each account, the list includes the account ID and optionally the email address.
     */
    accountDetails: shared.AccountDetails[];
}
export declare class CreateMembersRequest extends SpeakeasyBase {
    requestBody: CreateMembersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMembersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMembersResponse?: shared.CreateMembersResponse;
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
     * ResourceConflictException
     */
    resourceConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
