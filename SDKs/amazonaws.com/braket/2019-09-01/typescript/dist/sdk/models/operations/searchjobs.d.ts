import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchJobsRequestBody extends SpeakeasyBase {
    /**
     * The filter values to use when searching for a job.
     */
    filters: shared.SearchJobsFilter[];
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.
     */
    nextToken?: string;
}
export declare class SearchJobsRequest extends SpeakeasyBase {
    requestBody: SearchJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class SearchJobsResponse extends SpeakeasyBase {
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
    searchJobsResponse?: shared.SearchJobsResponse;
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
