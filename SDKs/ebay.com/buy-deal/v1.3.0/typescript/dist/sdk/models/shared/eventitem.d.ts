import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Image } from "./image";
import { MarketingPrice } from "./marketingprice";
import { ShippingOption } from "./shippingoption";
/**
 * The detailed data returned for the event item.
 */
export declare class EventItem extends SpeakeasyBase {
    /**
     * The additional images for the event item.
     */
    additionalImages?: Image[];
    /**
     * The IDs of the ancestors for the primary category.
     */
    categoryAncestorIds?: string[];
    /**
     * The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children.
     */
    categoryId?: string;
    /**
     * A string value specifying the Energy Efficiency class.
     */
    energyEfficiencyClass?: string;
    /**
     * The unique event identifier associated with the item.
     */
    eventId?: string;
    /**
     * The type that defines the details of an image, such as size and URL.
     */
    image?: Image;
    /**
     * The item web URL with affiliate attribution.
     */
    itemAffiliateWebUrl?: string;
    /**
     * The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.
     */
    itemGroupId?: string;
    /**
     * An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>
     */
    itemGroupType?: string;
    /**
     * The unique identifier for the event item. Note: This field is only returned for single-SKU items.
     */
    itemId?: string;
    /**
     * The web URL for the event item.
     */
    itemWebUrl?: string;
    /**
     * The legacy item ID associated with the event item.
     */
    legacyItemId?: string;
    /**
     * A type that describes the seller discount.
     */
    marketingPrice?: MarketingPrice;
    /**
     * The currency and value of the item.
     */
    price?: Amount;
    /**
     * A list of programs applicable to the event item.
     */
    qualifiedPrograms?: string[];
    /**
     * The cost required to ship the event item.
     */
    shippingOptions?: ShippingOption[];
    /**
     * The title of the event item.
     */
    title?: string;
    /**
     * The currency and value of the item.
     */
    unitPrice?: Amount;
    /**
     * The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;
     */
    unitPricingMeasure?: string;
}
