import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
 */
export declare class ListFindingsRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Record<string, shared.CriterionAdditionalProperties>;
}
/**
 * Specifies criteria for sorting the results of a request for findings.
 */
export declare class ListFindingsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class ListFindingsRequestBody extends SpeakeasyBase {
    /**
     * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
     */
    findingCriteria?: ListFindingsRequestBodyFindingCriteria;
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: number;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
    /**
     * Specifies criteria for sorting the results of a request for findings.
     */
    sortCriteria?: ListFindingsRequestBodySortCriteria;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    requestBody: ListFindingsRequestBody;
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
export declare class ListFindingsResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listFindingsResponse?: shared.ListFindingsResponse;
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
