import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The name and value of a sampling rule to apply to a trace summary.
 */
export declare class GetTraceSummariesRequestBodySamplingStrategy extends SpeakeasyBase {
    name?: shared.SamplingStrategyNameEnum;
    value?: number;
}
/**
 * A parameter to indicate whether to query trace summaries by TraceId or Event time.
 */
export declare enum GetTraceSummariesRequestBodyTimeRangeTypeEnum {
    TraceId = "TraceId",
    Event = "Event"
}
export declare class GetTraceSummariesRequestBody extends SpeakeasyBase {
    /**
     * The end of the time frame for which to retrieve traces.
     */
    endTime: Date;
    /**
     * Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.
     */
    filterExpression?: string;
    /**
     * Specify the pagination token returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * Set to <code>true</code> to get summaries for only a subset of available traces.
     */
    sampling?: boolean;
    /**
     * The name and value of a sampling rule to apply to a trace summary.
     */
    samplingStrategy?: GetTraceSummariesRequestBodySamplingStrategy;
    /**
     * The start of the time frame for which to retrieve traces.
     */
    startTime: Date;
    /**
     * A parameter to indicate whether to query trace summaries by TraceId or Event time.
     */
    timeRangeType?: GetTraceSummariesRequestBodyTimeRangeTypeEnum;
}
export declare class GetTraceSummariesRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetTraceSummariesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTraceSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTraceSummariesResult?: shared.GetTraceSummariesResult;
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
