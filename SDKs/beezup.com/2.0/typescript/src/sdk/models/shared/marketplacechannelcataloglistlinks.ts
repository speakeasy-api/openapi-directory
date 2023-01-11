import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetMarketplaceChannelCatalogsLink } from "./linksgetmarketplacechannelcatalogslink";



export class MarketplaceChannelCatalogListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetMarketplaceChannelCatalogsLink;
}
