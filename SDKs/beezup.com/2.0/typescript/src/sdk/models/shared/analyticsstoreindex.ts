import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsStoreIndexLinks } from "./analyticsstoreindexlinks";



export class AnalyticsStoreIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: AnalyticsStoreIndexLinks;
}
