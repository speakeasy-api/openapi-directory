import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetLegacyTrackingChannelCatalogLink } from "./linksgetlegacytrackingchannelcataloglink";
import { LinksMigrateLegacyTrackingChannelCatalogLink } from "./linksmigratelegacytrackingchannelcataloglink";
/**
 * Indicates the actions you can do on a channel catalog
 */
export declare class LegacyTrackingChannelCatalogLinks extends SpeakeasyBase {
    migrate?: LinksMigrateLegacyTrackingChannelCatalogLink;
    self: LinksGetLegacyTrackingChannelCatalogLink;
}
