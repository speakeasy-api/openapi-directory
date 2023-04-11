import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure defines a metric that you want to use to evaluate the variations during a launch or experiment.
 */
export declare class MetricDefinitionConfig extends SpeakeasyBase {
    entityIdKey: string;
    eventPattern?: string;
    name: string;
    unitLabel?: string;
    valueKey: string;
}
