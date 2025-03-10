import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";
/**
 * Information about a Savings Plan rate.
 */
export declare class SavingsPlanRate extends SpeakeasyBase {
    currency?: CurrencyCodeEnum;
    operation?: string;
    productType?: SavingsPlanProductTypeEnum;
    /**
     * The properties.
     */
    properties?: any;
    rate?: string;
    serviceCode?: SavingsPlanRateServiceCodeEnum;
    unit?: SavingsPlanRateUnitEnum;
    usageType?: string;
}
