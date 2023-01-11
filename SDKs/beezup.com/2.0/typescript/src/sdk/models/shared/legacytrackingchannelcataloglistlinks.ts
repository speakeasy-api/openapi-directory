import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetLegacyTrackingChannelCatalogsLink } from "./linksgetlegacytrackingchannelcatalogslink";



// LegacyTrackingChannelCatalogListLinks
/** 
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 * 
**/
export class LegacyTrackingChannelCatalogListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetLegacyTrackingChannelCatalogsLink;
}
