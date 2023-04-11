import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
 */
export declare class ListEntitiesRequestBodySort extends SpeakeasyBase {
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
}
export declare class ListEntitiesRequestBody extends SpeakeasyBase {
    /**
     * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
     */
    catalog: string;
    /**
     * The type of entities to retrieve.
     */
    entityType: string;
    /**
     * An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.
     */
    filterList?: shared.Filter[];
    /**
     * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
     */
    maxResults?: number;
    /**
     * The value of the next token, if it exists. Null if there are no more results.
     */
    nextToken?: string;
    /**
     * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
     */
    sort?: ListEntitiesRequestBodySort;
}
export declare class ListEntitiesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListEntitiesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEntitiesResponse extends SpeakeasyBase {
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
    listEntitiesResponse?: shared.ListEntitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
