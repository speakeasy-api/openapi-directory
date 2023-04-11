import { SpeakeasyBase } from "../../../internal/utils";
import { ParentSavingsPlanOffering } from "./parentsavingsplanoffering";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";
/**
 * Information about a Savings Plan offering rate.
 */
export declare class SavingsPlanOfferingRate extends SpeakeasyBase {
    operation?: string;
    productType?: SavingsPlanProductTypeEnum;
    /**
     * The properties.
     */
    properties?: any;
    rate?: string;
    savingsPlanOffering?: ParentSavingsPlanOffering;
    serviceCode?: SavingsPlanRateServiceCodeEnum;
    unit?: SavingsPlanRateUnitEnum;
    usageType?: string;
}
