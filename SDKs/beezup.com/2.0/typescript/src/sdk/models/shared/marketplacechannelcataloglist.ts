import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceChannelCatalogListLinks } from "./marketplacechannelcataloglistlinks";
import { MarketplaceChannelCatalog } from "./marketplacechannelcatalog";



// MarketplaceChannelCatalogList
/** 
 * The marketplace channel catalog list
**/
export class MarketplaceChannelCatalogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: MarketplaceChannelCatalogListLinks;

  @SpeakeasyMetadata({ data: "json, name=marketplaceChannelCatalogs", elemType: MarketplaceChannelCatalog })
  marketplaceChannelCatalogs: MarketplaceChannelCatalog[];
}
