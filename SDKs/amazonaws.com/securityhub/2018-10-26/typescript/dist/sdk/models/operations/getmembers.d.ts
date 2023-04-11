import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMembersRequestBody extends SpeakeasyBase {
    /**
     * The list of account IDs for the Security Hub member accounts to return the details for.
     */
    accountIds: string[];
}
export declare class GetMembersRequest extends SpeakeasyBase {
    requestBody: GetMembersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getMembersResponse?: shared.GetMembersResponse;
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
