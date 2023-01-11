import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfoListLinks } from "./channelcatalogproductinfolistlinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ChannelCatalogProductInfo } from "./channelcatalogproductinfo";
/**
 * The channel catalog product info list
**/
export declare class ChannelCatalogProductInfoList extends SpeakeasyBase {
    links: ChannelCatalogProductInfoListLinks;
    paginationResult: BeezUpCommonPaginationResult;
    productInfos: ChannelCatalogProductInfo[];
}
