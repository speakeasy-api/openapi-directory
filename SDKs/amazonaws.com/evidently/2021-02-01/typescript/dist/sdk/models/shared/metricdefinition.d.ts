import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure defines a metric that is being used to evaluate the variations during a launch or experiment.
 */
export declare class MetricDefinition extends SpeakeasyBase {
    entityIdKey?: string;
    eventPattern?: string;
    name?: string;
    unitLabel?: string;
    valueKey?: string;
}
