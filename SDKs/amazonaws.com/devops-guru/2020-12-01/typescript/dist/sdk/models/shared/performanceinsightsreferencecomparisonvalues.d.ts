import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceInsightsReferenceMetric } from "./performanceinsightsreferencemetric";
import { PerformanceInsightsReferenceScalar } from "./performanceinsightsreferencescalar";
/**
 * Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected.
 */
export declare class PerformanceInsightsReferenceComparisonValues extends SpeakeasyBase {
    referenceMetric?: PerformanceInsightsReferenceMetric;
    referenceScalar?: PerformanceInsightsReferenceScalar;
}
