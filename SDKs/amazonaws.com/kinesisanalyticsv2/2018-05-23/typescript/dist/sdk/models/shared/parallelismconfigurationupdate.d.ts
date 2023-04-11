import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes updates to parameters for how an application executes multiple tasks simultaneously.
 */
export declare class ParallelismConfigurationUpdate extends SpeakeasyBase {
    autoScalingEnabledUpdate?: boolean;
    configurationTypeUpdate?: ConfigurationTypeEnum;
    parallelismPerKPUUpdate?: number;
    parallelismUpdate?: number;
}
