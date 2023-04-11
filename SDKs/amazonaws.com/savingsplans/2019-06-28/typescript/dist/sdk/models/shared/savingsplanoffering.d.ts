import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
/**
 * Information about a Savings Plan offering.
 */
export declare class SavingsPlanOffering extends SpeakeasyBase {
    currency?: CurrencyCodeEnum;
    description?: string;
    durationSeconds?: number;
    offeringId?: string;
    operation?: string;
    paymentOption?: SavingsPlanPaymentOptionEnum;
    planType?: SavingsPlanTypeEnum;
    productTypes?: SavingsPlanProductTypeEnum[];
    /**
     * The properties.
     */
    properties?: any;
    serviceCode?: string;
    usageType?: string;
}
