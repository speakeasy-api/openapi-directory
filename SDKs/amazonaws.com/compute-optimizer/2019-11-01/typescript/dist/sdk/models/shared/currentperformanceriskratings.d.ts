import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the performance risk ratings for a given resource type.</p> <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not meeting the performance needs of their workloads, while resources with a <code>low</code> rating are performing well in their workloads.</p>
 */
export declare class CurrentPerformanceRiskRatings extends SpeakeasyBase {
    high?: number;
    low?: number;
    medium?: number;
    veryLow?: number;
}
