import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum {
    EnableBackups = "enable_backups",
    DisableBackups = "disable_backups",
    Reboot = "reboot",
    PowerCycle = "power_cycle",
    Shutdown = "shutdown",
    PowerOff = "power_off",
    PowerOn = "power_on",
    Restore = "restore",
    PasswordReset = "password_reset",
    Resize = "resize",
    Rebuild = "rebuild",
    Rename = "rename",
    ChangeKernel = "change_kernel",
    EnableIpv6 = "enable_ipv6",
    Snapshot = "snapshot"
}
/**
 * Specifies the action that will be taken on the Droplet.
**/
export declare class Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 extends SpeakeasyBase {
    type: Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum;
}
