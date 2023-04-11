import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsSummary } from "./contributorinsightssummary";
/**
 * Success
 */
export declare class ListContributorInsightsOutput extends SpeakeasyBase {
    contributorInsightsSummaries?: ContributorInsightsSummary[];
    nextToken?: string;
}
