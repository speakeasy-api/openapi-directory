import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsIndexLinks } from "./analyticsindexlinks";
import { AnalyticsIndexLovLinks } from "./analyticsindexlovlinks";
import { AnalyticsStoreIndex } from "./analyticsstoreindex";



// AnalyticsIndex
/** 
 * The Analytics API operation index.
**/
export class AnalyticsIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: AnalyticsIndexLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks?: AnalyticsIndexLovLinks;

  @SpeakeasyMetadata({ data: "json, name=stores", elemType: AnalyticsStoreIndex })
  stores: AnalyticsStoreIndex[];
}
