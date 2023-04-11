import { SpeakeasyBase } from "../../../internal/utils";
import { AccountScopeEnum } from "./accountscopeenum";
import { LookbackPeriodInDaysEnum } from "./lookbackperiodindaysenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { SavingsPlansPurchaseRecommendationDetail } from "./savingsplanspurchaserecommendationdetail";
import { SavingsPlansPurchaseRecommendationSummary } from "./savingsplanspurchaserecommendationsummary";
import { SupportedSavingsPlansTypeEnum } from "./supportedsavingsplanstypeenum";
import { TermInYearsEnum } from "./terminyearsenum";
/**
 * Contains your request parameters, Savings Plan Recommendations Summary, and Details.
 */
export declare class SavingsPlansPurchaseRecommendation extends SpeakeasyBase {
    accountScope?: AccountScopeEnum;
    lookbackPeriodInDays?: LookbackPeriodInDaysEnum;
    paymentOption?: PaymentOptionEnum;
    savingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[];
    savingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
    savingsPlansType?: SupportedSavingsPlansTypeEnum;
    termInYears?: TermInYearsEnum;
}
