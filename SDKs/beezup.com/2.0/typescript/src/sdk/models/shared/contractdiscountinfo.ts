import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PromotionalCodeValidityEnum } from "./promotionalcodevalidityenum";



// ContractDiscountInfo
/** 
 * Describe the discount information related to the offer.
**/
export class ContractDiscountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountCodePromoDiscount" })
  amountCodePromoDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountCodePromoDiscountPerMonth" })
  amountCodePromoDiscountPerMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=couponDiscountCode" })
  couponDiscountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=couponDiscountId" })
  couponDiscountId?: number;

  @SpeakeasyMetadata({ data: "json, name=customerHasActualDiscount" })
  customerHasActualDiscount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=discountDurationInMonth" })
  discountDurationInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=isCouponDiscountLinkedToCouponOffer" })
  isCouponDiscountLinkedToCouponOffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=percentDiscount" })
  percentDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=promotionalCodeValidity" })
  promotionalCodeValidity?: PromotionalCodeValidityEnum;
}
