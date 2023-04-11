import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMonitoringConfiguration } from "./cloudwatchmonitoringconfiguration";
import { PersistentAppUIEnum } from "./persistentappuienum";
import { S3MonitoringConfiguration } from "./s3monitoringconfiguration";
/**
 * Configuration setting for monitoring.
 */
export declare class MonitoringConfiguration extends SpeakeasyBase {
    cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
    persistentAppUI?: PersistentAppUIEnum;
    s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
