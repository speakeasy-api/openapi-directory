import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalog } from "./channelcatalog";
import { ChannelCatalogListLinks } from "./channelcataloglistlinks";
import { ChannelCatalogListLovLinks } from "./channelcataloglistlovlinks";
/**
 * This is the index of the channel catalog API
 */
export declare class ChannelCatalogList extends SpeakeasyBase {
    /**
     * The channel catalog list. The key is the channel catalog identifier
     */
    channelCatalogs?: Record<string, ChannelCatalog>;
    /**
     * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
     *
     * @remarks
     *
     */
    links?: ChannelCatalogListLinks;
    lovLinks?: ChannelCatalogListLovLinks;
}
