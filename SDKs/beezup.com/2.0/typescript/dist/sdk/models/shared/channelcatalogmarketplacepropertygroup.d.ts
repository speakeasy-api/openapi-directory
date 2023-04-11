import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogMarketplaceProperty } from "./channelcatalogmarketplaceproperty";
export declare class ChannelCatalogMarketplacePropertyGroup extends SpeakeasyBase {
    /**
     * Indicate the code identifier of the group
     */
    name: string;
    /**
     * Indicate the position of the group
     */
    position: number;
    properties: ChannelCatalogMarketplaceProperty[];
}
