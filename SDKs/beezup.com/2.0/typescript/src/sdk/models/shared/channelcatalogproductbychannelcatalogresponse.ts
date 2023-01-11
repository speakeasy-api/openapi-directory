import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfo } from "./channelcatalogproductinfo";



export class ChannelCatalogProductByChannelCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogs", elemType: ChannelCatalogProductInfo })
  channelCatalogs?: Record<string, ChannelCatalogProductInfo>;
}
