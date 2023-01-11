import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { ChannelCatalogMarketplacePropertiesLinks } from "./channelcatalogmarketplacepropertieslinks";



export class ChannelCatalogMarketplaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogMarketplacePropertiesLinks;

  @SpeakeasyMetadata({ data: "json, name=propertyGroups" })
  propertyGroups: any[];
}
