import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelCatalogProductInfoLink } from "./linksgetchannelcatalogproductinfolink";
import { LinksOptimiseByProductLink } from "./linksoptimisebyproductlink";
/**
 * If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
 */
export declare class ReportByProductOneChannelLinks extends SpeakeasyBase {
    disableProductForOneChannel: LinksOptimiseByProductLink;
    enableProductForOneChannel: LinksOptimiseByProductLink;
    productInfo: LinksGetChannelCatalogProductInfoLink;
}
