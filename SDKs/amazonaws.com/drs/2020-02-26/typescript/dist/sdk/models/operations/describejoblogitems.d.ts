import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeJobLogItemsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Job for which Job log items will be retrieved.
     */
    jobID: string;
    /**
     * Maximum number of Job log items to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Job log items to retrieve.
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
