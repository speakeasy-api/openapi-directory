import { SpeakeasyBase } from "../../../internal/utils";
import { BaselineMetric } from "./baselinemetric";
/**
 * Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.
 */
export declare class PredictorBaseline extends SpeakeasyBase {
    baselineMetrics?: BaselineMetric[];
}
