import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionalCodeValidityEnum } from "./promotionalcodevalidityenum";
/**
 * Describe the discount information related to the offer.
**/
export declare class ContractDiscountInfo extends SpeakeasyBase {
    amountCodePromoDiscount?: number;
    amountCodePromoDiscountPerMonth?: number;
    couponDiscountCode?: string;
    couponDiscountId?: number;
    customerHasActualDiscount?: boolean;
    discountDurationInMonth?: number;
    isCouponDiscountLinkedToCouponOffer?: boolean;
    percentDiscount?: number;
    promotionalCodeValidity?: PromotionalCodeValidityEnum;
}
