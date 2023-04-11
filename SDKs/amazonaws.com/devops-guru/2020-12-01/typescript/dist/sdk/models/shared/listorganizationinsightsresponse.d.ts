import { SpeakeasyBase } from "../../../internal/utils";
import { ProactiveOrganizationInsightSummary } from "./proactiveorganizationinsightsummary";
import { ReactiveOrganizationInsightSummary } from "./reactiveorganizationinsightsummary";
/**
 * Success
 */
export declare class ListOrganizationInsightsResponse extends SpeakeasyBase {
    nextToken?: string;
    proactiveInsights?: ProactiveOrganizationInsightSummary[];
    reactiveInsights?: ReactiveOrganizationInsightSummary[];
}
