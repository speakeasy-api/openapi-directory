import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LegacyTrackingChannelCatalog } from "./legacytrackingchannelcatalog";
import { LegacyTrackingChannelCatalogListLinks } from "./legacytrackingchannelcataloglistlinks";



// LegacyTrackingChannelCatalogList
/** 
 * This is the index of the channel catalog API
**/
export class LegacyTrackingChannelCatalogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogs", elemType: LegacyTrackingChannelCatalog })
  channelCatalogs?: Record<string, LegacyTrackingChannelCatalog>;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LegacyTrackingChannelCatalogListLinks;
}
