import { SpeakeasyBase } from "../../../internal/utils";
import { ParametricCloudWatchMonitoringConfiguration } from "./parametriccloudwatchmonitoringconfiguration";
import { ParametricS3MonitoringConfiguration } from "./parametrics3monitoringconfiguration";
/**
 *  Configuration setting for monitoring. This data type allows job template parameters to be specified within.
 */
export declare class ParametricMonitoringConfiguration extends SpeakeasyBase {
    cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;
    persistentAppUI?: string;
    s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
}
