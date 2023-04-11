import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLMetricEnumEnum } from "./automlmetricenumenum";
/**
 * Specifies a metric to minimize or maximize as the objective of a job. V2 API jobs (for example jobs created by calling <code>CreateAutoMLJobV2</code>), support <code>Accuracy</code> only.
 */
export declare class AutoMLJobObjective extends SpeakeasyBase {
    metricName: AutoMLMetricEnumEnum;
}
