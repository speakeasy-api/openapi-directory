import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeDirectionEnumEnum } from "./changedirectionenumenum";
import { MetricDefinition } from "./metricdefinition";
/**
 * A structure that tells Evidently whether higher or lower values are desired for a metric that is used in an experiment.
 */
export declare class MetricGoal extends SpeakeasyBase {
    desiredChange?: ChangeDirectionEnumEnum;
    metricDefinition: MetricDefinition;
}
