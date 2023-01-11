import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksAnalyticsIndexLink } from "./linksanalyticsindexlink";
import { LinksGetTrackingStatusLink } from "./linksgettrackingstatuslink";



export class AnalyticsIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksAnalyticsIndexLink;

  @SpeakeasyMetadata({ data: "json, name=trackingStatus" })
  trackingStatus?: LinksGetTrackingStatusLink;
}
