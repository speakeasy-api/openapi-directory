import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedPersistenceMonitoringConfiguration } from "./managedpersistencemonitoringconfiguration";
import { S3MonitoringConfiguration } from "./s3monitoringconfiguration";
/**
 * The configuration setting for monitoring.
 */
export declare class MonitoringConfiguration extends SpeakeasyBase {
    managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
    s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
