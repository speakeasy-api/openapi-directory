import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
 */
export declare class TrustedAdvisorResourcesSummary extends SpeakeasyBase {
    resourcesFlagged: number;
    resourcesIgnored: number;
    resourcesProcessed: number;
    resourcesSuppressed: number;
}
