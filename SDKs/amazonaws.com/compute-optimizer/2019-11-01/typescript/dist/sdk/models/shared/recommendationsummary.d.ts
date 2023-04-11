import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentPerformanceRiskRatings } from "./currentperformanceriskratings";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
import { SavingsOpportunity } from "./savingsopportunity";
import { Summary } from "./summary";
/**
 * A summary of a recommendation.
 */
export declare class RecommendationSummary extends SpeakeasyBase {
    accountId?: string;
    currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings;
    recommendationResourceType?: RecommendationSourceTypeEnum;
    savingsOpportunity?: SavingsOpportunity;
    summaries?: Summary[];
}
