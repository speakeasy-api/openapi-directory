import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationIntegrationEnum } from "./organizationintegrationenum";
/**
 * Lists the settings defined for discovering Linux subscriptions.
 */
export declare class LinuxSubscriptionsDiscoverySettings extends SpeakeasyBase {
    organizationIntegration: OrganizationIntegrationEnum;
    sourceRegions: string[];
}
