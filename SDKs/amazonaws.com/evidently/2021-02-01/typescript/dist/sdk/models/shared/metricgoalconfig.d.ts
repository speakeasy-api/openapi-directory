import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeDirectionEnumEnum } from "./changedirectionenumenum";
import { MetricDefinitionConfig } from "./metricdefinitionconfig";
/**
 * Use this structure to tell Evidently whether higher or lower values are desired for a metric that is used in an experiment.
 */
export declare class MetricGoalConfig extends SpeakeasyBase {
    desiredChange?: ChangeDirectionEnumEnum;
    metricDefinition: MetricDefinitionConfig;
}
