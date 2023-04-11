import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for import references.
 */
export declare class ListReferenceImportJobsRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    status?: shared.ReferenceImportJobStatusEnum;
}
export declare class ListReferenceImportJobsRequestBody extends SpeakeasyBase {
    /**
     * A filter for import references.
     */
    filter?: ListReferenceImportJobsRequestBodyFilter;
}
export declare class ListReferenceImportJobsRequest extends SpeakeasyBase {
    requestBody: ListReferenceImportJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of jobs to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: string;
}
export declare class ListReferenceImportJobsResponse extends SpeakeasyBase {
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
    listReferenceImportJobsResponse?: shared.ListReferenceImportJobsResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
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
