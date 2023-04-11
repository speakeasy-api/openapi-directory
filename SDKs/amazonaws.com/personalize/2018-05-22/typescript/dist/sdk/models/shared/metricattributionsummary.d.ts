import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>.
 */
export declare class MetricAttributionSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    metricAttributionArn?: string;
    name?: string;
    status?: string;
}
