import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for variant import jobs.
 */
export declare class ListVariantImportJobsRequestBodyFilter extends SpeakeasyBase {
    status?: shared.JobStatusEnum;
    storeName?: string;
}
export declare class ListVariantImportJobsRequestBody extends SpeakeasyBase {
    /**
     * A filter for variant import jobs.
     */
    filter?: ListVariantImportJobsRequestBodyFilter;
    /**
     * A list of job IDs.
     */
    ids?: string[];
}
export declare class ListVariantImportJobsRequest extends SpeakeasyBase {
    requestBody: ListVariantImportJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of import jobs to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
}
export declare class ListVariantImportJobsResponse extends SpeakeasyBase {
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
    listVariantImportJobsResponse?: shared.ListVariantImportJobsResponse;
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
