import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase.
 */
export declare class ReservationPurchaseRecommendationSummary extends SpeakeasyBase {
    currencyCode?: string;
    totalEstimatedMonthlySavingsAmount?: string;
    totalEstimatedMonthlySavingsPercentage?: string;
}
