import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMemberAccountsXAmzTargetEnum {
    AWSFMS20180101ListMemberAccounts = "AWSFMS_20180101.ListMemberAccounts"
}
export declare class ListMemberAccountsRequest extends SpeakeasyBase {
    listMemberAccountsRequest: shared.ListMemberAccountsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMemberAccountsXAmzTargetEnum;
}
export declare class ListMemberAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * Success
     */
    listMemberAccountsResponse?: shared.ListMemberAccountsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
