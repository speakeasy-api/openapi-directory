import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metric used for the subscription.
 */
export declare enum DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsMetricEnum {
    AggregateLatency = "aggregate-latency"
}
/**
 * The data aggregation time for the subscription.
 */
export declare enum DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsPeriodEnum {
    FiveMinutes = "five-minutes",
    FifteenMinutes = "fifteen-minutes",
    OneHour = "one-hour",
    ThreeHours = "three-hours",
    OneDay = "one-day",
    OneWeek = "one-week"
}
/**
 * The statistic used for the subscription.
 */
export declare enum DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsStatisticEnum {
    P50 = "p50"
}
/**
 * Describes an Infrastructure Performance subscription.
 */
export declare class DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptions extends SpeakeasyBase {
    destination?: string;
    metric?: DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsMetricEnum;
    period?: DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsPeriodEnum;
    source?: string;
    statistic?: DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptionsStatisticEnum;
}
/**
 * Success
 */
export declare class DescribeAwsNetworkPerformanceMetricSubscriptionsResult extends SpeakeasyBase {
    nextToken?: string;
    subscriptions?: DescribeAwsNetworkPerformanceMetricSubscriptionsResultSubscriptions[];
}
