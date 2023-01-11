import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogExportCacheInfo } from "./channelcatalogexportcacheinfo";
import { ChannelCatalogExportCacheInfoResponseLinks } from "./channelcatalogexportcacheinforesponselinks";



export class ChannelCatalogExportCacheInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheInfo" })
  cacheInfo: ChannelCatalogExportCacheInfo;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogExportCacheInfoResponseLinks;
}
