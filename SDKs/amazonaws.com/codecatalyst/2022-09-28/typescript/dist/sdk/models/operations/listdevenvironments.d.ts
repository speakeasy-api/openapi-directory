import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDevEnvironmentsRequestBody extends SpeakeasyBase {
    /**
     * Information about filters to apply to narrow the results returned in the list.
     */
    filters?: shared.Filter[];
    /**
     * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
     */
    maxResults?: number;
    /**
     * A token returned from a call to this API to indicate the next batch of results to return, if any.
     */
    nextToken?: string;
}
export declare class ListDevEnvironmentsRequest extends SpeakeasyBase {
    requestBody: ListDevEnvironmentsRequestBody;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class ListDevEnvironmentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    listDevEnvironmentsResponse?: shared.ListDevEnvironmentsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
