import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Defines and enables Amazon CloudWatch metrics and web request sample collection.
 */
export declare class AwsWafv2VisibilityConfigDetails extends SpeakeasyBase {
    cloudWatchMetricsEnabled?: boolean;
    metricName?: string;
    sampledRequestsEnabled?: boolean;
}
