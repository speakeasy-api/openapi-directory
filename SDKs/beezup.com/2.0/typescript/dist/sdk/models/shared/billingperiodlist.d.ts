import { SpeakeasyBase } from "../../../internal/utils";
import { BillingPeriod } from "./billingperiod";
import { BillingPeriodListLinks } from "./billingperiodlistlinks";
/**
 * Get the billing periods conditions
 */
export declare class BillingPeriodList extends SpeakeasyBase {
    /**
     * The billing period list
     */
    billingPeriods: BillingPeriod[];
    links: BillingPeriodListLinks;
}
