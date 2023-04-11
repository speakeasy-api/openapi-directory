import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeFlowExecutionRecordsRequestBody extends SpeakeasyBase {
    /**
     *  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
     */
    flowName: string;
    /**
     *  Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
     */
    maxResults?: number;
    /**
     *  The pagination token for the next page of data.
     */
    nextToken?: string;
}
export declare class DescribeFlowExecutionRecordsRequest extends SpeakeasyBase {
    requestBody: DescribeFlowExecutionRecordsRequestBody;
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
export declare class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFlowExecutionRecordsResponse?: shared.DescribeFlowExecutionRecordsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
