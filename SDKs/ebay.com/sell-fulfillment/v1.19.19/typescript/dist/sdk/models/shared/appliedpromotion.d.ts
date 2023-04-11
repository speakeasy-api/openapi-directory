import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about a sales promotion that is applied to a line item.
 */
export declare class AppliedPromotion extends SpeakeasyBase {
    /**
     * A description of the applied sales promotion.
     */
    description?: string;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    discountAmount?: Amount;
    /**
     * An eBay-generated unique identifier of the sales promotion.<br><br> Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API's <b>SetPromotionalSale</b> call or the Marketing API's <b>createItemPromotion</b> method.
     */
    promotionId?: string;
}
