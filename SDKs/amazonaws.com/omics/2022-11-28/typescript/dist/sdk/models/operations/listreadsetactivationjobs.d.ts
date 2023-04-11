import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A read set activation job filter.
 */
export declare class ListReadSetActivationJobsRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    status?: shared.ReadSetActivationJobStatusEnum;
}
export declare class ListReadSetActivationJobsRequestBody extends SpeakeasyBase {
    /**
     * A read set activation job filter.
     */
    filter?: ListReadSetActivationJobsRequestBodyFilter;
}
export declare class ListReadSetActivationJobsRequest extends SpeakeasyBase {
    requestBody: ListReadSetActivationJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of read set activation jobs to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: string;
}
export declare class ListReadSetActivationJobsResponse extends SpeakeasyBase {
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
    listReadSetActivationJobsResponse?: shared.ListReadSetActivationJobsResponse;
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
