import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
 */
export declare class ListChangeSetsRequestBodySort extends SpeakeasyBase {
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
}
export declare class ListChangeSetsRequestBody extends SpeakeasyBase {
    /**
     * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
     */
    catalog: string;
    /**
     * An array of filter objects.
     */
    filterList?: shared.Filter[];
    /**
     * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
     */
    maxResults?: number;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
    /**
     * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
     */
    sort?: ListChangeSetsRequestBodySort;
}
export declare class ListChangeSetsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListChangeSetsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListChangeSetsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listChangeSetsResponse?: shared.ListChangeSetsResponse;
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
