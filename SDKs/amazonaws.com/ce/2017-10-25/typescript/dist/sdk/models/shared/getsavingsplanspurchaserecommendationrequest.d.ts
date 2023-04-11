import { SpeakeasyBase } from "../../../internal/utils";
import { AccountScopeEnum } from "./accountscopeenum";
import { Expression } from "./expression";
import { LookbackPeriodInDaysEnum } from "./lookbackperiodindaysenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { SupportedSavingsPlansTypeEnum } from "./supportedsavingsplanstypeenum";
import { TermInYearsEnum } from "./terminyearsenum";
export declare class GetSavingsPlansPurchaseRecommendationRequest extends SpeakeasyBase {
    accountScope?: AccountScopeEnum;
    filter?: Expression;
    lookbackPeriodInDays: LookbackPeriodInDaysEnum;
    nextPageToken?: string;
    pageSize?: number;
    paymentOption: PaymentOptionEnum;
    savingsPlansType: SupportedSavingsPlansTypeEnum;
    termInYears: TermInYearsEnum;
}
