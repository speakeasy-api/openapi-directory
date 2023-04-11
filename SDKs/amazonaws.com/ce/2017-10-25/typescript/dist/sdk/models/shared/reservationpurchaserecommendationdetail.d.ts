import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceDetails } from "./instancedetails";
/**
 * Details about your recommended reservation purchase.
 */
export declare class ReservationPurchaseRecommendationDetail extends SpeakeasyBase {
    accountId?: string;
    averageNormalizedUnitsUsedPerHour?: string;
    averageNumberOfInstancesUsedPerHour?: string;
    averageUtilization?: string;
    currencyCode?: string;
    estimatedBreakEvenInMonths?: string;
    estimatedMonthlyOnDemandCost?: string;
    estimatedMonthlySavingsAmount?: string;
    estimatedMonthlySavingsPercentage?: string;
    estimatedReservationCostForLookbackPeriod?: string;
    instanceDetails?: InstanceDetails;
    maximumNormalizedUnitsUsedPerHour?: string;
    maximumNumberOfInstancesUsedPerHour?: string;
    minimumNormalizedUnitsUsedPerHour?: string;
    minimumNumberOfInstancesUsedPerHour?: string;
    recommendedNormalizedUnitsToPurchase?: string;
    recommendedNumberOfInstancesToPurchase?: string;
    recurringStandardMonthlyCost?: string;
    upfrontCost?: string;
}
