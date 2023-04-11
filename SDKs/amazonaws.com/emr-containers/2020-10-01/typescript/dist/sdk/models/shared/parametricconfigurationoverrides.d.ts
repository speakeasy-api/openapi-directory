import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ParametricMonitoringConfiguration } from "./parametricmonitoringconfiguration";
/**
 *  A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within.
 */
export declare class ParametricConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: Configuration[];
    monitoringConfiguration?: ParametricMonitoringConfiguration;
}
