import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalog } from "./channelcatalog";
import { ChannelCatalogListLinks } from "./channelcataloglistlinks";
import { ChannelCatalogListLovLinks } from "./channelcataloglistlovlinks";
/**
 * This is the index of the channel catalog API
**/
export declare class ChannelCatalogList extends SpeakeasyBase {
    channelCatalogs?: Record<string, ChannelCatalog>;
    links?: ChannelCatalogListLinks;
    lovLinks?: ChannelCatalogListLovLinks;
}
