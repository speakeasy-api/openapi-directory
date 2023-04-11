import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableAwsNetworkPerformanceMetricSubscriptionActionEnum {
    EnableAwsNetworkPerformanceMetricSubscription = "EnableAwsNetworkPerformanceMetricSubscription"
}
/**
 * The metric used for the enabled subscription.
 */
export declare enum GETEnableAwsNetworkPerformanceMetricSubscriptionMetricEnum {
    AggregateLatency = "aggregate-latency"
}
/**
 * The statistic used for the enabled subscription.
 */
export declare enum GETEnableAwsNetworkPerformanceMetricSubscriptionStatisticEnum {
    P50 = "p50"
}
export declare enum GETEnableAwsNetworkPerformanceMetricSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableAwsNetworkPerformanceMetricSubscriptionRequest extends SpeakeasyBase {
    action: GETEnableAwsNetworkPerformanceMetricSubscriptionActionEnum;
    /**
     * The target Region or Availability Zone that the metric subscription is enabled for. For example, <code>eu-west-1</code>.
     */
    destination?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The metric used for the enabled subscription.
     */
    metric?: GETEnableAwsNetworkPerformanceMetricSubscriptionMetricEnum;
    /**
     * The source Region or Availability Zone that the metric subscription is enabled for. For example, <code>us-east-1</code>.
     */
    source?: string;
    /**
     * The statistic used for the enabled subscription.
     */
    statistic?: GETEnableAwsNetworkPerformanceMetricSubscriptionStatisticEnum;
    version: GETEnableAwsNetworkPerformanceMetricSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableAwsNetworkPerformanceMetricSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
