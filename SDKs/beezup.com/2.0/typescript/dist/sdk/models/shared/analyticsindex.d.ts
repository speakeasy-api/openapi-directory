import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsIndexLinks } from "./analyticsindexlinks";
import { AnalyticsIndexLovLinks } from "./analyticsindexlovlinks";
import { AnalyticsStoreIndex } from "./analyticsstoreindex";
/**
 * The Analytics API operation index.
 */
export declare class AnalyticsIndex extends SpeakeasyBase {
    links: AnalyticsIndexLinks;
    lovLinks?: AnalyticsIndexLovLinks;
    stores: AnalyticsStoreIndex[];
}
