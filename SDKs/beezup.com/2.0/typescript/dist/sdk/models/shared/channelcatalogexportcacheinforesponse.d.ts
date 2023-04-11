import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogExportCacheInfo } from "./channelcatalogexportcacheinfo";
import { ChannelCatalogExportCacheInfoResponseLinks } from "./channelcatalogexportcacheinforesponselinks";
/**
 * Channel catalog exportation cache information
 */
export declare class ChannelCatalogExportCacheInfoResponse extends SpeakeasyBase {
    cacheInfo: ChannelCatalogExportCacheInfo;
    links: ChannelCatalogExportCacheInfoResponseLinks;
}
