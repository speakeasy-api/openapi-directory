import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
import { ScalingParameters } from "./scalingparameters";
/**
 * The status and configuration of a search domain's scaling parameters.
 */
export declare class ScalingParametersStatus extends SpeakeasyBase {
    /**
     * The desired instance type and desired number of replicas of each index partition.
     */
    options: ScalingParameters;
    /**
     * The status of domain configuration option.
     */
    status: OptionStatus;
}
