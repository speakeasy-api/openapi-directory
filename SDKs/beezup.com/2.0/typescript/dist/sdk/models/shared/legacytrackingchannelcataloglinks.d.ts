import { SpeakeasyBase } from "../../../internal/utils";
import { LinksMigrateLegacyTrackingChannelCatalogLink } from "./linksmigratelegacytrackingchannelcataloglink";
import { LinksGetLegacyTrackingChannelCatalogLink } from "./linksgetlegacytrackingchannelcataloglink";
/**
 * Indicates the actions you can do on a channel catalog
**/
export declare class LegacyTrackingChannelCatalogLinks extends SpeakeasyBase {
    migrate?: LinksMigrateLegacyTrackingChannelCatalogLink;
    self: LinksGetLegacyTrackingChannelCatalogLink;
}
