import { SpeakeasyBase } from "../../../internal/utils";
import { LegacyTrackingChannelCatalog } from "./legacytrackingchannelcatalog";
import { LegacyTrackingChannelCatalogListLinks } from "./legacytrackingchannelcataloglistlinks";
/**
 * This is the index of the channel catalog API
**/
export declare class LegacyTrackingChannelCatalogList extends SpeakeasyBase {
    channelCatalogs?: Record<string, LegacyTrackingChannelCatalog>;
    links?: LegacyTrackingChannelCatalogListLinks;
}
