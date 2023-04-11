import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ChannelCatalogProductInfo } from "./channelcatalogproductinfo";
import { ChannelCatalogProductInfoListLinks } from "./channelcatalogproductinfolistlinks";
/**
 * The channel catalog product info list
 */
export declare class ChannelCatalogProductInfoList extends SpeakeasyBase {
    links: ChannelCatalogProductInfoListLinks;
    paginationResult: BeezUPCommonPaginationResult;
    productInfos: ChannelCatalogProductInfo[];
}
