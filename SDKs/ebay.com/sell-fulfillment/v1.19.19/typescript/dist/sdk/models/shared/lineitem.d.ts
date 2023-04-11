import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { AppliedPromotion } from "./appliedpromotion";
import { DeliveryCost } from "./deliverycost";
import { EbayCollectAndRemitTax } from "./ebaycollectandremittax";
import { EbayCollectedCharges } from "./ebaycollectedcharges";
import { GiftDetails } from "./giftdetails";
import { ItemLocation } from "./itemlocation";
import { LineItemFulfillmentInstructions } from "./lineitemfulfillmentinstructions";
import { LineItemProperties } from "./lineitemproperties";
import { LineItemRefund } from "./lineitemrefund";
import { NameValuePair } from "./namevaluepair";
import { Tax } from "./tax";
/**
 * This type contains the details of each line item in an order.
 */
export declare class LineItem extends SpeakeasyBase {
    /**
     * This array contains information about one or more sales promotions or discounts applied to the line item. It is always returned, but will be returned as an empty array if no special sales promotions or discounts apply to the order line item.
     */
    appliedPromotions?: AppliedPromotion[];
    /**
     * This type contains a breakdown of all costs associated with the fulfillment of a line item.
     */
    deliveryCost?: DeliveryCost;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    discountedLineItemCost?: Amount;
    /**
     * This container will be returned if the order line item is subject to a 'Collect and Remit' tax that eBay will collect and remit to the proper taxing authority on the buyer's behalf.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul>The amount of this tax is shown in the <strong>amount</strong> field, and the type of tax is shown in the <strong>taxType</strong> field.<br><br>eBay will display the tax type and amount during checkout in accordance with the buyer's address, and handle collection and remittance of the tax without requiring the seller to take any action.
     */
    ebayCollectAndRemitTaxes?: EbayCollectAndRemitTax[];
    /**
     * This type contains the breakdown of costs that are collected by eBay from the buyer.
     */
    ebayCollectedCharges?: EbayCollectedCharges;
    /**
     * This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> When retrieving information for a digital gift card that is more than 90 days old, the information returned in all fields will be masked.</span>
     */
    giftDetails?: GiftDetails;
    /**
     * This type describes the physical location of an order.
     */
    itemLocation?: ItemLocation;
    /**
     * The eBay-generated legacy listing item ID of the listing. Note that the unique identifier of a listing in REST-based APIs is called the <strong>listingId</strong> instead.
     */
    legacyItemId?: string;
    /**
     * The unique identifier of a single variation within a multiple-variation listing. This field is only returned if the line item purchased was from a multiple-variation listing.
     */
    legacyVariationId?: string;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    lineItemCost?: Amount;
    /**
     * This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery.
     */
    lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions;
    /**
     * This enumeration value indicates the current fulfillment status of the line item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:LineItemFulfillmentStatusEnum'>eBay API documentation</a>
     */
    lineItemFulfillmentStatus?: string;
    /**
     * This is the unique identifier of an eBay order line item. This field is created as soon as there is a commitment to buy from the seller.
     */
    lineItemId?: string;
    /**
     * The unique identifier of the eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    listingMarketplaceId?: string;
    /**
     * This type contains information about the eBay programs under which a line item was listed and sold.
     */
    properties?: LineItemProperties;
    /**
     * The unique identifier of the eBay marketplace where the line item was listed. Often, the <strong>listingMarketplaceId</strong> and the <strong>purchaseMarketplaceId</strong> identifier are the same, but there are occasions when an item will surface on multiple eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    purchaseMarketplaceId?: string;
    /**
     * The number of units of the line item in the order. These are represented as a group by a single <b>lineItemId</b>.
     */
    quantity?: number;
    /**
     * This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.
     */
    refunds?: LineItemRefund[];
    /**
     * Seller-defined Stock-Keeping Unit (SKU). This inventory identifier must be unique within the seller's eBay inventory. SKUs are optional when listing in the legacy/Trading API system, but SKUs are required when listing items through the Inventory API model.
     */
    sku?: string;
    /**
     * The eBay listing type of the line item. The most common listing types are <code>AUCTION</code> and <code>FIXED_PRICE</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:SoldFormatEnum'>eBay API documentation</a>
     */
    soldFormat?: string;
    /**
     * Contains a list of taxes applied to the line item, if any. This array is always returned, but will be returned as empty if no taxes are applicable to the line item.
     */
    taxes?: Tax[];
    /**
     * The title of the listing.
     */
    title?: string;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    total?: Amount;
    /**
     * An array of aspect name-value pairs that identifies the specific variation of a multi-variation listing. This array can contain multiple name-value pairs, such as <code>color:blue</code> and <code>size:large</code>, and will only be returned for orders created from a multiple-variation listing.
     */
    variationAspects?: NameValuePair[];
}
