import { SpeakeasyBase } from "../../../internal/utils";
import { LinuxSubscriptionsDiscoveryEnum } from "./linuxsubscriptionsdiscoveryenum";
import { LinuxSubscriptionsDiscoverySettings } from "./linuxsubscriptionsdiscoverysettings";
import { StatusEnum } from "./statusenum";
/**
 * Success
 */
export declare class UpdateServiceSettingsResponse extends SpeakeasyBase {
    homeRegions?: string[];
    linuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscoveryEnum;
    linuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
    status?: StatusEnum;
    statusMessage?: Record<string, string>;
}
