import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Buyer } from "./buyer";
import { CancelStatus } from "./cancelstatus";
import { FulfillmentStartInstruction } from "./fulfillmentstartinstruction";
import { LineItem } from "./lineitem";
import { PaymentSummary } from "./paymentsummary";
import { PricingSummary } from "./pricingsummary";
import { Program } from "./program";
/**
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * This type contains information about the order's buyer.
     */
    buyer?: Buyer;
    /**
     * This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time.
     */
    buyerCheckoutNotes?: string;
    /**
     * This type contains information about any requests that have been made to cancel an order.
     */
    cancelStatus?: CancelStatus;
    /**
     * The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    creationDate?: string;
    /**
     * This field is only returned if <code>true</code>, and indicates that eBay will collect tax (US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, 'Goods and Services' tax in Canada, Australia, and New Zealand, and VAT collected for UK and EU countries,) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence. If this field is returned, the seller should search for one or more <strong>ebayCollectAndRemitTaxes</strong> containers at the line item level to get more information about the type of tax and the amount.
     */
    ebayCollectAndRemitTax?: boolean;
    /**
     * This array contains a list of one or more <strong>getShippingFulfillment</strong> call URIs that can be used to retrieve shipping fulfillments that have been set up for the order.
     */
    fulfillmentHrefs?: string[];
    /**
     * This container consists of a set of specifications for fulfilling the order, including the type of fulfillment, shipping carrier and service, shipping address, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.<br><br><span class="tablenote"><strong>Note:</strong> Although this container is presented as an array, it currently returns only one set of fulfillment specifications. Additional array members will be supported in future functionality.</span>
     */
    fulfillmentStartInstructions?: FulfillmentStartInstruction[];
    /**
     * The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    lastModifiedDate?: string;
    /**
     * The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the <b>orderId</b> field and this field are always returned.
     */
    legacyOrderId?: string;
    /**
     * This array contains the details for all line items that comprise the order.
     */
    lineItems?: LineItem[];
    /**
     * The degree to which fulfillment of the order is complete. See the <strong>OrderFulfillmentStatus</strong> type definition for more information about each possible fulfillment state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus'>eBay API documentation</a>
     */
    orderFulfillmentStatus?: string;
    /**
     * The unique identifier of the order. Both the <b>legacyOrderId</b> field (traditionally used by Trading and other legacy APIS) and this field are always returned.
     */
    orderId?: string;
    /**
     * The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the <strong>OrderPaymentStatusEnum</strong> type definition for more information about each possible payment/refund state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum'>eBay API documentation</a>
     */
    orderPaymentStatus?: string;
    /**
     * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
     */
    paymentSummary?: PaymentSummary;
    /**
     * This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
     */
    pricingSummary?: PricingSummary;
    /**
     * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping.
     */
    program?: Program;
    /**
     * An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A <strong>salesRecordReference</strong> number is only generated and returned at the order level, and not at the order line item level.<br><br> In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned.
     */
    salesRecordReference?: string;
    /**
     * The unique eBay user ID of the seller who sold the order.
     */
    sellerId?: string;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    totalFeeBasisAmount?: Amount;
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    totalMarketplaceFee?: Amount;
}
