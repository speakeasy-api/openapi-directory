import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobObjectiveTypeEnum } from "./automljobobjectivetypeenum";
import { AutoMLMetricEnumEnum } from "./automlmetricenumenum";
/**
 * The best candidate result from an AutoML training job.
 */
export declare class FinalAutoMLJobObjectiveMetric extends SpeakeasyBase {
    metricName: AutoMLMetricEnumEnum;
    standardMetricName?: AutoMLMetricEnumEnum;
    type?: AutoMLJobObjectiveTypeEnum;
    value: number;
}
