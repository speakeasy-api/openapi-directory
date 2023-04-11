import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInsightsRequestBody extends SpeakeasyBase {
    /**
     * The ARNs of the insights to describe. If you do not provide any insight ARNs, then <code>GetInsights</code> returns all of your custom insights. It does not return any managed insights.
     */
    insightArns?: string[];
    /**
     * The maximum number of items to return in the response.
     */
    maxResults?: number;
    /**
     * <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
     */
    nextToken?: string;
}
export declare class GetInsightsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetInsightsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInsightsResponse?: shared.GetInsightsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
