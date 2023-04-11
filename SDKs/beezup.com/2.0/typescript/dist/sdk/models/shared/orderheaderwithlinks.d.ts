import { SpeakeasyBase } from "../../../internal/utils";
import { OrderHeaderLinks } from "./orderheaderlinks";
/**
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
 */
export declare class OrderHeaderWithLinks extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    beezUPOrderUrl?: string;
    /**
     * ETag value to identify the order.\
     *
     * @remarks
     * This information is required for the operation GetOrder and ChangeOrder.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     *
     */
    etag: string;
    links: OrderHeaderLinks;
    /**
     * In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.
     */
    marketplaceBusinessCode: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
    /**
     * Buyer full name
     */
    orderBuyerName?: string;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    orderCurrencyCode?: string;
    /**
     * The order invoice number
     */
    orderInvoiceNumber?: string;
    /**
     * The order invoice URI
     */
    orderInvoiceUri?: string;
    /**
     * The last modification UTC date done by BeezUP of this order
     */
    orderLastModificationUtcDate: Date;
    /**
     * The last modification UTC date done by the marketplace on this order
     */
    orderMarketplaceLastModificationUtcDate: Date;
    /**
     * The order marketplace identifier
     */
    orderMarketplaceOrderId: string;
    /**
     * The e-commerce software name of the merchant
     */
    orderMerchantECommerceSoftwareName?: string;
    /**
     * The e-commece software version of the merchant
     */
    orderMerchantECommerceSoftwareVersion?: string;
    /**
     * The order merchant identifier
     */
    orderMerchantOrderId?: string;
    /**
     * The purchase date of this order
     */
    orderPurchaseUtcDate: Date;
    /**
     * BeezUP order status. Unified for all marketplaces.
     */
    orderStatusBeezUPOrderStatus: string;
    /**
     * The marketplace order state
     */
    orderStatusMarketplaceOrderStatus?: string;
    /**
     * The total price of this order (corresponding to the amount paid by the customer)
     */
    orderTotalPrice?: number;
    /**
     * If true, there is currently a harvest or an order change in progress. Otherwise false.
     */
    processing: boolean;
}
