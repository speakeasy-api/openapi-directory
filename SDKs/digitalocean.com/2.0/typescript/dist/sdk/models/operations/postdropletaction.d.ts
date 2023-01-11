import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDropletActionPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare enum PostDropletActionRequestBody1TypeEnum {
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
export declare class PostDropletActionRequestBody1 extends SpeakeasyBase {
    type: PostDropletActionRequestBody1TypeEnum;
}
export declare enum PostDropletActionRequestBody2TypeEnum {
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
export declare class PostDropletActionRequestBody2 extends SpeakeasyBase {
    image?: number;
    type: PostDropletActionRequestBody2TypeEnum;
}
export declare enum PostDropletActionRequestBody3TypeEnum {
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
export declare class PostDropletActionRequestBody3 extends SpeakeasyBase {
    disk?: boolean;
    size?: string;
    type: PostDropletActionRequestBody3TypeEnum;
}
export declare enum PostDropletActionRequestBody4TypeEnum {
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
export declare class PostDropletActionRequestBody4 extends SpeakeasyBase {
    image?: any;
    type: PostDropletActionRequestBody4TypeEnum;
}
export declare enum PostDropletActionRequestBody5TypeEnum {
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
export declare class PostDropletActionRequestBody5 extends SpeakeasyBase {
    name?: string;
    type: PostDropletActionRequestBody5TypeEnum;
}
export declare enum PostDropletActionRequestBody6TypeEnum {
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
export declare class PostDropletActionRequestBody6 extends SpeakeasyBase {
    kernel?: number;
    type: PostDropletActionRequestBody6TypeEnum;
}
export declare enum PostDropletActionRequestBody7TypeEnum {
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
export declare class PostDropletActionRequestBody7 extends SpeakeasyBase {
    name?: string;
    type: PostDropletActionRequestBody7TypeEnum;
}
export declare class PostDropletAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostDropletActionRequest extends SpeakeasyBase {
    pathParams: PostDropletActionPathParams;
    request?: any;
}
export declare class PostDropletActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postDropletAction201ApplicationJSONAny?: any;
    postDropletAction401ApplicationJSONObject?: PostDropletAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
