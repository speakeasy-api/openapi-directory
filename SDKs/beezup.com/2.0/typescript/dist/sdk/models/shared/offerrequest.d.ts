import { SpeakeasyBase } from "../../../internal/utils";
export declare class OfferRequest extends SpeakeasyBase {
    /**
     * Can be null. The billing period in month based on /billingPeriods
     */
    billingPeriodInMonth: number;
    /**
     * The coupon discount code
     */
    couponDiscountCode?: string;
    /**
     * Your special coupon offer identifier
     */
    couponOfferCode?: string;
    /**
     * The offer id based on /offers. Not a free offer of course.
     */
    offerId: number;
    /**
     * The store count you want to have in your contract.
     */
    storeCount: number;
}
