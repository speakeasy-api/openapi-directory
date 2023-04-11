import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for annotation import jobs.
 */
export declare class ListAnnotationImportJobsRequestBodyFilter extends SpeakeasyBase {
    status?: shared.JobStatusEnum;
    storeName?: string;
}
export declare class ListAnnotationImportJobsRequestBody extends SpeakeasyBase {
    /**
     * A filter for annotation import jobs.
     */
    filter?: ListAnnotationImportJobsRequestBodyFilter;
    /**
     * IDs of annotation import jobs to retrieve.
     */
    ids?: string[];
}
export declare class ListAnnotationImportJobsRequest extends SpeakeasyBase {
    requestBody: ListAnnotationImportJobsRequestBody;
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
}
export declare class ListAnnotationImportJobsResponse extends SpeakeasyBase {
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
    listAnnotationImportJobsResponse?: shared.ListAnnotationImportJobsResponse;
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
