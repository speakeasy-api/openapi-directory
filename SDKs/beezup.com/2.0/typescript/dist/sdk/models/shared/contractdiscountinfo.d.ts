import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionalCodeValidityEnum } from "./promotionalcodevalidityenum";
/**
 * Describe the discount information related to the offer.
 */
export declare class ContractDiscountInfo extends SpeakeasyBase {
    /**
     * The discount amount
     */
    amountCodePromoDiscount?: number;
    /**
     * The amount discounted per month
     */
    amountCodePromoDiscountPerMonth?: number;
    /**
     * The discount code
     */
    couponDiscountCode?: string;
    /**
     * Internal use: The discount id
     */
    couponDiscountId?: number;
    /**
     * Do you have currently a discount on your contract ?
     */
    customerHasActualDiscount?: boolean;
    /**
     * Duration of the discount in month
     */
    discountDurationInMonth?: number;
    /**
     * Is this discount is related to a coupon offer
     */
    isCouponDiscountLinkedToCouponOffer?: boolean;
    /**
     * Percentage of the discount
     */
    percentDiscount?: number;
    /**
     * Indicate the validaty of the discount
     */
    promotionalCodeValidity?: PromotionalCodeValidityEnum;
}
