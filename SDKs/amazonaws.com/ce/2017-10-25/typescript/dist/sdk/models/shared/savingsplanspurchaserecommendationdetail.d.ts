import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansDetails } from "./savingsplansdetails";
/**
 * Details for your recommended Savings Plans.
 */
export declare class SavingsPlansPurchaseRecommendationDetail extends SpeakeasyBase {
    accountId?: string;
    currencyCode?: string;
    currentAverageHourlyOnDemandSpend?: string;
    currentMaximumHourlyOnDemandSpend?: string;
    currentMinimumHourlyOnDemandSpend?: string;
    estimatedAverageUtilization?: string;
    estimatedMonthlySavingsAmount?: string;
    estimatedOnDemandCost?: string;
    estimatedOnDemandCostWithCurrentCommitment?: string;
    estimatedROI?: string;
    estimatedSPCost?: string;
    estimatedSavingsAmount?: string;
    estimatedSavingsPercentage?: string;
    hourlyCommitmentToPurchase?: string;
    savingsPlansDetails?: SavingsPlansDetails;
    upfrontCost?: string;
}
