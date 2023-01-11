import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksAddChannelCatalogLink } from "./linksaddchannelcataloglink";
import { ExternalLinksCatalogGetBeezUpColumnsLink } from "./externallinkscataloggetbeezupcolumnslink";
import { LinksGetChannelCatalogFilterOperatorsLink } from "./linksgetchannelcatalogfilteroperatorslink";
import { LinksGetChannelCatalogsLink } from "./linksgetchannelcatalogslink";



// ChannelCatalogListLinks
/** 
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 * 
**/
export class ChannelCatalogListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: LinksAddChannelCatalogLink;

  @SpeakeasyMetadata({ data: "json, name=beezUPColumns" })
  beezUPColumns?: ExternalLinksCatalogGetBeezUpColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=filterOperators" })
  filterOperators?: LinksGetChannelCatalogFilterOperatorsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetChannelCatalogsLink;
}
