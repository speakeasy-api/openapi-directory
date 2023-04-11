import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
 */
export declare class ListMonitoredResourcesRequestBodyFilters extends SpeakeasyBase {
    resourcePermission?: shared.ResourcePermissionEnum;
    resourceTypeFilters?: shared.ResourceTypeFilterEnum[];
}
export declare class ListMonitoredResourcesRequestBody extends SpeakeasyBase {
    /**
     *  Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
     */
    filters?: ListMonitoredResourcesRequestBodyFilters;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
}
export declare class ListMonitoredResourcesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListMonitoredResourcesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMonitoredResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listMonitoredResourcesResponse?: shared.ListMonitoredResourcesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
