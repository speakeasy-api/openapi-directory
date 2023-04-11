import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTimeSeriesServiceStatisticsRequestBody extends SpeakeasyBase {
    /**
     * The end of the time frame for which to aggregate statistics.
     */
    endTime: Date;
    /**
     * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
     */
    entitySelectorExpression?: string;
    /**
     * The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.
     */
    forecastStatistics?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the group for which to pull statistics from.
     */
    groupARN?: string;
    /**
     * The case-sensitive name of the group for which to pull statistics from.
     */
    groupName?: string;
    /**
     * Pagination token.
     */
    nextToken?: string;
    /**
     * Aggregation period in seconds.
     */
    period?: number;
    /**
     * The start of the time frame for which to aggregate statistics.
     */
    startTime: Date;
}
export declare class GetTimeSeriesServiceStatisticsRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetTimeSeriesServiceStatisticsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTimeSeriesServiceStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTimeSeriesServiceStatisticsResult?: shared.GetTimeSeriesServiceStatisticsResult;
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
