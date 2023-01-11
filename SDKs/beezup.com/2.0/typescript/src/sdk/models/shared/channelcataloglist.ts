import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalog } from "./channelcatalog";
import { ChannelCatalogListLinks } from "./channelcataloglistlinks";
import { ChannelCatalogListLovLinks } from "./channelcataloglistlovlinks";



// ChannelCatalogList
/** 
 * This is the index of the channel catalog API
**/
export class ChannelCatalogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogs", elemType: ChannelCatalog })
  channelCatalogs?: Record<string, ChannelCatalog>;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ChannelCatalogListLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks?: ChannelCatalogListLovLinks;
}
