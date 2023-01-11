import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfoListLinks } from "./channelcatalogproductinfolistlinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ChannelCatalogProductInfo } from "./channelcatalogproductinfo";



// ChannelCatalogProductInfoList
/** 
 * The channel catalog product info list
**/
export class ChannelCatalogProductInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogProductInfoListLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: BeezUpCommonPaginationResult;

  @SpeakeasyMetadata({ data: "json, name=productInfos", elemType: ChannelCatalogProductInfo })
  productInfos: ChannelCatalogProductInfo[];
}
