import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LegacyTrackingChannelCatalogLinks } from "./legacytrackingchannelcataloglinks";



export class LegacyTrackingChannelCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LegacyTrackingChannelCatalogLinks;
}
