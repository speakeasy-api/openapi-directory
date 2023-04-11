import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Request to describe Job log filters.
 */
export declare class DescribeJobsRequestBodyFilters extends SpeakeasyBase {
    fromDate?: string;
    jobIDs?: string[];
    toDate?: string;
}
export declare class DescribeJobsRequestBody extends SpeakeasyBase {
    /**
     * Request to describe Job log filters.
     */
    filters?: DescribeJobsRequestBodyFilters;
    /**
     * Request to describe job log items by max results.
     */
    maxResults?: number;
    /**
     * Request to describe job log items by next token.
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
