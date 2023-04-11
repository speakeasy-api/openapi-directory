import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMemberAccountsXAmzTargetEnum {
    MacieServiceListMemberAccounts = "MacieService.ListMemberAccounts"
}
export declare class ListMemberAccountsRequest extends SpeakeasyBase {
    listMemberAccountsRequest: shared.ListMemberAccountsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMemberAccountsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListMemberAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listMemberAccountsResult?: shared.ListMemberAccountsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
