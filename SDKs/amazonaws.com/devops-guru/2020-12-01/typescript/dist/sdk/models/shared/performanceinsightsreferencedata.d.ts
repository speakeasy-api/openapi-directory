import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceInsightsReferenceComparisonValues } from "./performanceinsightsreferencecomparisonvalues";
/**
 * Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not.
 */
export declare class PerformanceInsightsReferenceData extends SpeakeasyBase {
    comparisonValues?: PerformanceInsightsReferenceComparisonValues;
    name?: string;
}
