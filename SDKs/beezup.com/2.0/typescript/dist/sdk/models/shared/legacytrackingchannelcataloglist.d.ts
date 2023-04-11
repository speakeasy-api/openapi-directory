import { SpeakeasyBase } from "../../../internal/utils";
import { LegacyTrackingChannelCatalog } from "./legacytrackingchannelcatalog";
import { LegacyTrackingChannelCatalogListLinks } from "./legacytrackingchannelcataloglistlinks";
/**
 * This is the index of the channel catalog API
 */
export declare class LegacyTrackingChannelCatalogList extends SpeakeasyBase {
    /**
     * The channel catalog list. The key is the channel catalog identifier
     */
    channelCatalogs?: Record<string, LegacyTrackingChannelCatalog>;
    /**
     * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
     *
     * @remarks
     *
     */
    links?: LegacyTrackingChannelCatalogListLinks;
}
