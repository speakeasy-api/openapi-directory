import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseByProductLink } from "./linksoptimisebyproductlink";
import { LinksGetChannelCatalogProductInfoLink } from "./linksgetchannelcatalogproductinfolink";



// ReportByProductOneChannelLinks
/** 
 * If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
**/
export class ReportByProductOneChannelLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableProductForOneChannel" })
  disableProductForOneChannel: LinksOptimiseByProductLink;

  @SpeakeasyMetadata({ data: "json, name=enableProductForOneChannel" })
  enableProductForOneChannel: LinksOptimiseByProductLink;

  @SpeakeasyMetadata({ data: "json, name=productInfo" })
  productInfo: LinksGetChannelCatalogProductInfoLink;
}
