import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that describes the seller discount.
 */
export declare class MarketingPrice extends SpeakeasyBase {
    /**
     * The currency and value of the item.
     */
    discountAmount?: Amount;
    /**
     * The percentage of the seller discount based on the value returned in the originalPrice field.
     */
    discountPercentage?: string;
    /**
     * The currency and value of the item.
     */
    originalPrice?: Amount;
    /**
     * The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a>
     */
    priceTreatment?: string;
}
