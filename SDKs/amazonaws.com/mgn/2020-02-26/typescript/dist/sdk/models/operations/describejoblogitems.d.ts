import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeJobLogItemsRequestBody extends SpeakeasyBase {
    /**
     * Request to describe Job log job ID.
     */
    jobID: string;
    /**
     * Request to describe Job log item maximum results.
     */
    maxResults?: number;
    /**
     * Request to describe Job log next token.
     */
    nextToken?: string;
}
export declare class DescribeJobLogItemsRequest extends SpeakeasyBase {
    requestBody: DescribeJobLogItemsRequestBody;
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
export declare class DescribeJobLogItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobLogItemsResponse?: shared.DescribeJobLogItemsResponse;
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
