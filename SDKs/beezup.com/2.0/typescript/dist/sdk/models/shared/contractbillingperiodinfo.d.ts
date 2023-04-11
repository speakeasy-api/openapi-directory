import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the billing period information related to the offer.
 */
export declare class ContractBillingPeriodInfo extends SpeakeasyBase {
    /**
     * The amount discounted related to the billing period
     */
    amountBillingPeriodDiscount?: number;
    /**
     * Can be null. The billing period in month based on /billingPeriods
     */
    billingPeriodInMonth?: number;
    /**
     * The discount percent related to the billing period
     */
    billingPeriodPercentDiscount?: number;
}
