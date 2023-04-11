import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A set of filters by which to return Jobs.
 */
export declare class DescribeJobsRequestBodyFilters extends SpeakeasyBase {
    fromDate?: string;
    jobIDs?: string[];
    toDate?: string;
}
export declare class DescribeJobsRequestBody extends SpeakeasyBase {
    /**
     * A set of filters by which to return Jobs.
     */
    filters?: DescribeJobsRequestBodyFilters;
    /**
     * Maximum number of Jobs to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Job to retrieve.
     */
    nextToken?: string;
}
export declare class DescribeJobsRequest extends SpeakeasyBase {
    requestBody: DescribeJobsRequestBody;
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
export declare class DescribeJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobsResponse?: shared.DescribeJobsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
