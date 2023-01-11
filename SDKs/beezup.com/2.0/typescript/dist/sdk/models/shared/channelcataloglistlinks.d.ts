import { SpeakeasyBase } from "../../../internal/utils";
import { LinksAddChannelCatalogLink } from "./linksaddchannelcataloglink";
import { ExternalLinksCatalogGetBeezUpColumnsLink } from "./externallinkscataloggetbeezupcolumnslink";
import { LinksGetChannelCatalogFilterOperatorsLink } from "./linksgetchannelcatalogfilteroperatorslink";
import { LinksGetChannelCatalogsLink } from "./linksgetchannelcatalogslink";
/**
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 *
**/
export declare class ChannelCatalogListLinks extends SpeakeasyBase {
    add?: LinksAddChannelCatalogLink;
    beezUPColumns?: ExternalLinksCatalogGetBeezUpColumnsLink;
    filterOperators?: LinksGetChannelCatalogFilterOperatorsLink;
    self?: LinksGetChannelCatalogsLink;
}
