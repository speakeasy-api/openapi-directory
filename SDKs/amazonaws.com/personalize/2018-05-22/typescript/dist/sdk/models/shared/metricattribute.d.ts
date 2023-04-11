import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
 */
export declare class MetricAttribute extends SpeakeasyBase {
    eventType: string;
    expression: string;
    metricName: string;
}
