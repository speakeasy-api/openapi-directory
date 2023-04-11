import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalLinksCatalogGetBeezUPColumnsLink } from "./externallinkscataloggetbeezupcolumnslink";
import { LinksAddChannelCatalogLink } from "./linksaddchannelcataloglink";
import { LinksGetChannelCatalogFilterOperatorsLink } from "./linksgetchannelcatalogfilteroperatorslink";
import { LinksGetChannelCatalogsLink } from "./linksgetchannelcatalogslink";
/**
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 *
 * @remarks
 *
 */
export declare class ChannelCatalogListLinks extends SpeakeasyBase {
    add?: LinksAddChannelCatalogLink;
    beezUPColumns?: ExternalLinksCatalogGetBeezUPColumnsLink;
    filterOperators?: LinksGetChannelCatalogFilterOperatorsLink;
    self?: LinksGetChannelCatalogsLink;
}
