import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for import read set jobs.
 */
export declare class ListReadSetImportJobsRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    status?: shared.ReadSetImportJobStatusEnum;
}
export declare class ListReadSetImportJobsRequestBody extends SpeakeasyBase {
    /**
     * A filter for import read set jobs.
     */
    filter?: ListReadSetImportJobsRequestBodyFilter;
}
export declare class ListReadSetImportJobsRequest extends SpeakeasyBase {
    requestBody: ListReadSetImportJobsRequestBody;
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
     * The jobs' sequence store ID.
     */
    sequenceStoreId: string;
}
export declare class ListReadSetImportJobsResponse extends SpeakeasyBase {
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
    listReadSetImportJobsResponse?: shared.ListReadSetImportJobsResponse;
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
