import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDropletActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}

export enum PostDropletActionRequestBody1TypeEnum {
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


// PostDropletActionRequestBody1
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody1TypeEnum;
}

export enum PostDropletActionRequestBody2TypeEnum {
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


// PostDropletActionRequestBody2
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody2TypeEnum;
}

export enum PostDropletActionRequestBody3TypeEnum {
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


// PostDropletActionRequestBody3
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody3TypeEnum;
}

export enum PostDropletActionRequestBody4TypeEnum {
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


// PostDropletActionRequestBody4
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody4TypeEnum;
}

export enum PostDropletActionRequestBody5TypeEnum {
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


// PostDropletActionRequestBody5
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody5TypeEnum;
}

export enum PostDropletActionRequestBody6TypeEnum {
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


// PostDropletActionRequestBody6
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kernel" })
  kernel?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody6TypeEnum;
}

export enum PostDropletActionRequestBody7TypeEnum {
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


// PostDropletActionRequestBody7
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody7TypeEnum;
}


export class PostDropletAction401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostDropletActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDropletActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostDropletActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDropletAction201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  postDropletAction401ApplicationJSONObject?: PostDropletAction401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
