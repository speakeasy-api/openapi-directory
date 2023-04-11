import { SpeakeasyBase } from "../../../internal/utils";
import { HostMaintenanceEnum } from "./hostmaintenanceenum";
import { HostRecoveryEnum } from "./hostrecoveryenum";
/**
 * Specify whether to enable or disable auto-placement.
 */
export declare enum ModifyHostsRequestAutoPlacementEnum {
    On = "on",
    Off = "off"
}
export declare class ModifyHostsRequest extends SpeakeasyBase {
    autoPlacement?: ModifyHostsRequestAutoPlacementEnum;
    hostIds: string[];
    hostMaintenance?: HostMaintenanceEnum;
    hostRecovery?: HostRecoveryEnum;
    instanceFamily?: string;
    instanceType?: string;
}
