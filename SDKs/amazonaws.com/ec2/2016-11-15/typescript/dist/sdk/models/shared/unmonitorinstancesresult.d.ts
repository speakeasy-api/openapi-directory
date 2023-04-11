import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
 */
export declare enum UnmonitorInstancesResultInstanceMonitoringsMonitoringStateEnum {
    Disabled = "disabled",
    Disabling = "disabling",
    Enabled = "enabled",
    Pending = "pending"
}
/**
 * The monitoring for the instance.
 */
export declare class UnmonitorInstancesResultInstanceMonitoringsMonitoring extends SpeakeasyBase {
    state?: UnmonitorInstancesResultInstanceMonitoringsMonitoringStateEnum;
}
/**
 * Describes the monitoring of an instance.
 */
export declare class UnmonitorInstancesResultInstanceMonitorings extends SpeakeasyBase {
    instanceId?: string;
    monitoring?: UnmonitorInstancesResultInstanceMonitoringsMonitoring;
}
/**
 * Success
 */
export declare class UnmonitorInstancesResult extends SpeakeasyBase {
    instanceMonitorings?: UnmonitorInstancesResultInstanceMonitorings[];
}
