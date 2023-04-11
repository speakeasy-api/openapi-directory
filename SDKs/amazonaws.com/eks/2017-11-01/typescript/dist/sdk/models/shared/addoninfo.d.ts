import { SpeakeasyBase } from "../../../internal/utils";
import { AddonVersionInfo } from "./addonversioninfo";
import { MarketplaceInformation } from "./marketplaceinformation";
/**
 * Information about an add-on.
 */
export declare class AddonInfo extends SpeakeasyBase {
    addonName?: string;
    addonVersions?: AddonVersionInfo[];
    marketplaceInformation?: MarketplaceInformation;
    owner?: string;
    publisher?: string;
    type?: string;
}
