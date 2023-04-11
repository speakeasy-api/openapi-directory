import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * You can use a filter to select the bulk import jobs that you want to retrieve.
 */
export declare enum ListBulkImportJobsFilterEnum {
    All = "ALL",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelled = "CANCELLED",
    Failed = "FAILED",
    CompletedWithFailures = "COMPLETED_WITH_FAILURES",
    Completed = "COMPLETED"
}
export declare class ListBulkImportJobsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * You can use a filter to select the bulk import jobs that you want to retrieve.
     */
    filter?: ListBulkImportJobsFilterEnum;
    /**
     * The maximum number of results to return for each paginated request.
     */
    maxResults?: number;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
}
export declare class ListBulkImportJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listBulkImportJobsResponse?: shared.ListBulkImportJobsResponse;
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
}
