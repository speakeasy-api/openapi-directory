import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInsightEventsRequestBody extends SpeakeasyBase {
    /**
     * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
     */
    insightId: string;
    /**
     * Used to retrieve at most the specified value of events.
     */
    maxResults?: number;
    /**
     * Specify the pagination token returned by a previous request to retrieve the next page of events.
     */
    nextToken?: string;
}
export declare class GetInsightEventsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetInsightEventsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInsightEventsResult?: shared.GetInsightEventsResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
