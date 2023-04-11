import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EvaluationResult } from "./evaluationresult";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
/**
 * Success
 */
export declare class GetAccuracyMetricsResponse extends SpeakeasyBase {
    autoMLOverrideStrategy?: AutoMLOverrideStrategyEnum;
    isAutoPredictor?: boolean;
    optimizationMetric?: OptimizationMetricEnum;
    predictorEvaluationResults?: EvaluationResult[];
}
