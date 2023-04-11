import { SpeakeasyBase } from "../../../internal/utils";
import { AccountScopeEnum } from "./accountscopeenum";
import { LookbackPeriodInDaysEnum } from "./lookbackperiodindaysenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { ReservationPurchaseRecommendationDetail } from "./reservationpurchaserecommendationdetail";
import { ReservationPurchaseRecommendationSummary } from "./reservationpurchaserecommendationsummary";
import { ServiceSpecification } from "./servicespecification";
import { TermInYearsEnum } from "./terminyearsenum";
/**
 * A specific reservation that Amazon Web Services recommends for purchase.
 */
export declare class ReservationPurchaseRecommendation extends SpeakeasyBase {
    accountScope?: AccountScopeEnum;
    lookbackPeriodInDays?: LookbackPeriodInDaysEnum;
    paymentOption?: PaymentOptionEnum;
    recommendationDetails?: ReservationPurchaseRecommendationDetail[];
    recommendationSummary?: ReservationPurchaseRecommendationSummary;
    serviceSpecification?: ServiceSpecification;
    termInYears?: TermInYearsEnum;
}
