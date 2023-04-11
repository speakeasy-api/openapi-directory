import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInsightImpactGraphRequestBody extends SpeakeasyBase {
    /**
     * The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours.
     */
    endTime: Date;
    /**
     * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
     */
    insightId: string;
    /**
     * Specify the pagination token returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.
     */
    startTime: Date;
}
export declare class GetInsightImpactGraphRequest extends SpeakeasyBase {
    requestBody: GetInsightImpactGraphRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightImpactGraphResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInsightImpactGraphResult?: shared.GetInsightImpactGraphResult;
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
