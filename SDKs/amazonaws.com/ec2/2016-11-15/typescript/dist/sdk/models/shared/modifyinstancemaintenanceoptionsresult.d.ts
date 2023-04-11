import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information on the current automatic recovery behavior of your instance.
 */
export declare enum ModifyInstanceMaintenanceOptionsResultAutoRecoveryEnum {
    Disabled = "disabled",
    Default = "default"
}
/**
 * Success
 */
export declare class ModifyInstanceMaintenanceOptionsResult extends SpeakeasyBase {
    autoRecovery?: ModifyInstanceMaintenanceOptionsResultAutoRecoveryEnum;
    instanceId?: string;
}
