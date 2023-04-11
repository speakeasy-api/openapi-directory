import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { PricingUnitEnum } from "./pricingunitenum";
import { TimePeriod } from "./timeperiod";
/**
 * An estimate that's associated with a time period.
 */
export declare class EstimateByTime extends SpeakeasyBase {
    currency?: CurrencyEnum;
    pricingUnit?: PricingUnitEnum;
    timePeriod?: TimePeriod;
    unit?: number;
    usageCost?: number;
}
