import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTrackingMetric } from "./targettrackingmetric";
/**
 * <p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export declare class TargetTrackingMetricStat extends SpeakeasyBase {
    metric: TargetTrackingMetric;
    stat: string;
    unit?: string;
}
