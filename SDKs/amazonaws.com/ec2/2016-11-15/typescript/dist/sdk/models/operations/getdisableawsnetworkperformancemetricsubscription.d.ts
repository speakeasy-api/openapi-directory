import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableAwsNetworkPerformanceMetricSubscriptionActionEnum {
    DisableAwsNetworkPerformanceMetricSubscription = "DisableAwsNetworkPerformanceMetricSubscription"
}
/**
 * The metric used for the disabled subscription.
 */
export declare enum GETDisableAwsNetworkPerformanceMetricSubscriptionMetricEnum {
    AggregateLatency = "aggregate-latency"
}
/**
 * The statistic used for the disabled subscription.
 */
export declare enum GETDisableAwsNetworkPerformanceMetricSubscriptionStatisticEnum {
    P50 = "p50"
}
export declare enum GETDisableAwsNetworkPerformanceMetricSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableAwsNetworkPerformanceMetricSubscriptionRequest extends SpeakeasyBase {
    action: GETDisableAwsNetworkPerformanceMetricSubscriptionActionEnum;
    /**
     * The target Region or Availability Zone that the metric subscription is disabled for. For example, <code>eu-north-1</code>.
     */
    destination?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The metric used for the disabled subscription.
     */
    metric?: GETDisableAwsNetworkPerformanceMetricSubscriptionMetricEnum;
    /**
     * The source Region or Availability Zone that the metric subscription is disabled for. For example, <code>us-east-1</code>.
     */
    source?: string;
    /**
     * The statistic used for the disabled subscription.
     */
    statistic?: GETDisableAwsNetworkPerformanceMetricSubscriptionStatisticEnum;
    version: GETDisableAwsNetworkPerformanceMetricSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableAwsNetworkPerformanceMetricSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
