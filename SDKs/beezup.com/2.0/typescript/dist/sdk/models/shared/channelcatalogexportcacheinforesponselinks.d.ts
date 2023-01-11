import { SpeakeasyBase } from "../../../internal/utils";
import { LinksClearChannelCatalogExportationCacheLink } from "./linksclearchannelcatalogexportationcachelink";
import { LinksGetChannelCatalogExportationCacheInfoLink } from "./linksgetchannelcatalogexportationcacheinfolink";
export declare class ChannelCatalogExportCacheInfoResponseLinks extends SpeakeasyBase {
    clear?: LinksClearChannelCatalogExportationCacheLink;
    self: LinksGetChannelCatalogExportationCacheInfoLink;
}
