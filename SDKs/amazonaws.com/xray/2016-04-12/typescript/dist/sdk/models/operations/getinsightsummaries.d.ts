import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInsightSummariesRequestBody extends SpeakeasyBase {
    /**
     * The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
     */
    endTime: Date;
    /**
     * The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
     */
    groupARN?: string;
    /**
     * The name of the group. Required if the GroupARN isn't provided.
     */
    groupName?: string;
    /**
     * The maximum number of results to display.
     */
    maxResults?: number;
    /**
     * Pagination token.
     */
    nextToken?: string;
    /**
     * The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
     */
    startTime: Date;
    /**
     * The list of insight states.
     */
    states?: shared.InsightStateEnum[];
}
export declare class GetInsightSummariesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetInsightSummariesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInsightSummariesResult?: shared.GetInsightSummariesResult;
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
