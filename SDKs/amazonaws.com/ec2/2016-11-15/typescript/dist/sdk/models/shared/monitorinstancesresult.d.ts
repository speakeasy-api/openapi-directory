import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
 */
export declare enum MonitorInstancesResultInstanceMonitoringsMonitoringStateEnum {
    Disabled = "disabled",
    Disabling = "disabling",
    Enabled = "enabled",
    Pending = "pending"
}
/**
 * The monitoring for the instance.
 */
export declare class MonitorInstancesResultInstanceMonitoringsMonitoring extends SpeakeasyBase {
    state?: MonitorInstancesResultInstanceMonitoringsMonitoringStateEnum;
}
/**
 * Describes the monitoring of an instance.
 */
export declare class MonitorInstancesResultInstanceMonitorings extends SpeakeasyBase {
    instanceId?: string;
    monitoring?: MonitorInstancesResultInstanceMonitoringsMonitoring;
}
/**
 * Success
 */
export declare class MonitorInstancesResult extends SpeakeasyBase {
    instanceMonitorings?: MonitorInstancesResultInstanceMonitorings[];
}
