import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The aggregated numbers for your reservation usage.
 */
export declare class ReservationAggregates extends SpeakeasyBase {
    amortizedRecurringFee?: string;
    amortizedUpfrontFee?: string;
    netRISavings?: string;
    onDemandCostOfRIHoursUsed?: string;
    purchasedHours?: string;
    purchasedUnits?: string;
    riCostForUnusedHours?: string;
    realizedSavings?: string;
    totalActualHours?: string;
    totalActualUnits?: string;
    totalAmortizedFee?: string;
    totalPotentialRISavings?: string;
    unrealizedSavings?: string;
    unusedHours?: string;
    unusedUnits?: string;
    utilizationPercentage?: string;
    utilizationPercentageInUnits?: string;
}
