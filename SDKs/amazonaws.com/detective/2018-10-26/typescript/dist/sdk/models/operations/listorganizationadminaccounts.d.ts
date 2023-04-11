import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrganizationAdminAccountsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
     */
    nextToken?: string;
}
export declare class ListOrganizationAdminAccountsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListOrganizationAdminAccountsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listOrganizationAdminAccountsResponse?: shared.ListOrganizationAdminAccountsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
