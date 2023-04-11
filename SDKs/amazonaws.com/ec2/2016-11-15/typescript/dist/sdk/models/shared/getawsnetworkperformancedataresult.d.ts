import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metric used for the network performance request. Only <code>aggregate-latency</code> is supported, which shows network latency during a specified period.
 */
export declare enum GetAwsNetworkPerformanceDataResultDataResponsesMetricEnum {
    AggregateLatency = "aggregate-latency"
}
/**
 * Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the <code>startDate</code> to the <code>endDate</code>. Currently only <code>five_minutes</code> is supported.
 */
export declare class GetAwsNetworkPerformanceDataResultDataResponsesMetricPoints extends SpeakeasyBase {
    endDate?: Date;
    startDate?: Date;
    status?: string;
    value?: number;
}
/**
 * The period used for the network performance request.
 */
export declare enum GetAwsNetworkPerformanceDataResultDataResponsesPeriodEnum {
    FiveMinutes = "five-minutes",
    FifteenMinutes = "fifteen-minutes",
    OneHour = "one-hour",
    ThreeHours = "three-hours",
    OneDay = "one-day",
    OneWeek = "one-week"
}
/**
 * The statistic used for the network performance request.
 */
export declare enum GetAwsNetworkPerformanceDataResultDataResponsesStatisticEnum {
    P50 = "p50"
}
/**
 * The response to a <code>DataQuery</code>.
 */
export declare class GetAwsNetworkPerformanceDataResultDataResponses extends SpeakeasyBase {
    destination?: string;
    id?: string;
    metric?: GetAwsNetworkPerformanceDataResultDataResponsesMetricEnum;
    metricPoints?: GetAwsNetworkPerformanceDataResultDataResponsesMetricPoints[];
    period?: GetAwsNetworkPerformanceDataResultDataResponsesPeriodEnum;
    source?: string;
    statistic?: GetAwsNetworkPerformanceDataResultDataResponsesStatisticEnum;
}
/**
 * Success
 */
export declare class GetAwsNetworkPerformanceDataResult extends SpeakeasyBase {
    dataResponses?: GetAwsNetworkPerformanceDataResultDataResponses[];
    nextToken?: string;
}
