import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksMigrateLegacyTrackingChannelCatalogLink } from "./linksmigratelegacytrackingchannelcataloglink";
import { LinksGetLegacyTrackingChannelCatalogLink } from "./linksgetlegacytrackingchannelcataloglink";



// LegacyTrackingChannelCatalogLinks
/** 
 * Indicates the actions you can do on a channel catalog
**/
export class LegacyTrackingChannelCatalogLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrate" })
  migrate?: LinksMigrateLegacyTrackingChannelCatalogLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetLegacyTrackingChannelCatalogLink;
}
