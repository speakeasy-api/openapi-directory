import { SpeakeasyBase } from "../../../internal/utils";
import { LinksChangeOrderLink } from "./linkschangeorderlink";
import { OrderItem } from "./orderitem";
import { OrderLinks } from "./orderlinks";
/**
 * Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
 */
export declare class Order extends SpeakeasyBase {
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
    links: OrderLinks;
    /**
     * In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.
     */
    marketplaceBusinessCode: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
    orderItems: OrderItem[];
    /**
     * The Buyer address city of this order
     */
    orderBuyerAddressCity?: string;
    /**
     * The Buyer address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
     */
    orderBuyerAddressCountryIsoCodeAlpha2?: string;
    /**
     * The Buyer address country name
     */
    orderBuyerAddressCountryName?: string;
    /**
     * The Buyer address line 1 of this order
     */
    orderBuyerAddressLine1?: string;
    /**
     * The Buyer address line 2 of this order
     */
    orderBuyerAddressLine2?: string;
    /**
     * The Buyer address line 3 of this order
     */
    orderBuyerAddressLine3?: string;
    /**
     * The Buyer address postal code of this order
     */
    orderBuyerAddressPostalCode?: string;
    /**
     * The Buyer address state or region of this order
     */
    orderBuyerAddressStateOrRegion?: string;
    /**
     * The buyer civility for this order
     */
    orderBuyerCivility?: string;
    /**
     * The buyer company name for this order
     */
    orderBuyerCompanyName?: string;
    /**
     * The email of the buyer for this order
     */
    orderBuyerEmail?: string;
    /**
     * Order Buyer first name
     */
    orderBuyerFirstName?: string;
    /**
     * The buyer identifier for this order
     */
    orderBuyerIdentifier?: string;
    /**
     * Order Buyer last name
     */
    orderBuyerLastName?: string;
    /**
     * The mobile phone number of the buyer for this order
     */
    orderBuyerMobilePhone?: string;
    /**
     * Buyer full name
     */
    orderBuyerName?: string;
    /**
     * The phone number of the buyer for this order
     */
    orderBuyerPhone?: string;
    /**
     * The comment associated to this order
     */
    orderComment?: string;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    orderCurrencyCode?: string;
    /**
     * The order FulfilledBy
     */
    orderFulfilledBy?: string;
    /**
     * The order invoice number
     */
    orderInvoiceNumber?: string;
    /**
     * The order invoice URI
     */
    orderInvoiceUri?: string;
    /**
     * The order IsBusiness
     */
    orderIsBusiness?: boolean;
    /**
     * Indicates if the order is considered as Prime (only on Amazon)
     */
    orderIsPrime?: boolean;
    /**
     * The last modification UTC date done by BeezUP of this order
     */
    orderLastModificationUtcDate: Date;
    /**
     * Useful to identify the origin of the order. For example in Amazon.
     */
    orderMarketPlaceChannel?: string;
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
     * Technical information: The url to the source of this order items. We received this information from the marketplace.
     *
     * @remarks
     *
     */
    orderOrderItemsSourceUri?: string;
    /**
     * Technical information: The url to the source of this order. We received this information from the marketplace.
     *
     * @remarks
     *
     */
    orderOrderSourceUri?: string;
    /**
     * The UTC date of the payment of this order
     */
    orderPayingUtcDate?: Date;
    /**
     * The payment method of this order
     */
    orderPaymentMethod?: string;
    /**
     * The purchase date of this order
     */
    orderPurchaseUtcDate: Date;
    /**
     * The shipping address city of this order
     */
    orderShippingAddressCity?: string;
    /**
     * The shipping address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
     */
    orderShippingAddressCountryIsoCodeAlpha2?: string;
    /**
     * The shipping address country name
     */
    orderShippingAddressCountryName?: string;
    /**
     * The shipping address line 1 of this order
     */
    orderShippingAddressLine1?: string;
    /**
     * The shipping address line 2 of this order
     */
    orderShippingAddressLine2?: string;
    /**
     * The shipping address line 3 of this order
     */
    orderShippingAddressLine3?: string;
    /**
     * The name of the person in the shipping address for this order
     */
    orderShippingAddressName?: string;
    /**
     * The shipping address postal code of this order
     */
    orderShippingAddressPostalCode?: string;
    /**
     * The shipping address state or region of this order
     */
    orderShippingAddressStateOrRegion?: string;
    /**
     * The civility of the person in the shipping address for this order
     */
    orderShippingCivility?: string;
    /**
     * The company name of the shipping address for this order
     */
    orderShippingCompanyName?: string;
    /**
     * The UTC date of the earliest ship for this order
     */
    orderShippingEarliestShipUtcDate?: Date;
    /**
     * The email of the person in the shipping address for this order
     */
    orderShippingEmail?: string;
    /**
     * Order Shipping first name
     */
    orderShippingFirstName?: string;
    /**
     * Order Shipping last name
     */
    orderShippingLastName?: string;
    /**
     * The UTC date of the latest ship for this order
     */
    orderShippingLatestShipUtcDate?: Date;
    /**
     * The shipping method of this order
     */
    orderShippingMethod?: string;
    /**
     * The mobile phone number of the person in the shipping address for this order
     */
    orderShippingMobilePhone?: string;
    /**
     * The phone number of the person in the shipping address for this order
     */
    orderShippingPhone?: string;
    /**
     * The shipping price of this order
     */
    orderShippingPrice?: number;
    /**
     * The shipping tax for this order
     */
    orderShippingShippingTax?: number;
    /**
     * BeezUP order status. Unified for all marketplaces.
     */
    orderStatusBeezUPOrderStatus: string;
    /**
     * The marketplace order state
     */
    orderStatusMarketplaceOrderStatus?: string;
    /**
     * The total commission of this order
     */
    orderTotalCommission?: number;
    /**
     * The total price of this order (corresponding to the amount paid by the customer)
     */
    orderTotalPrice?: number;
    /**
     * The total tax of this order
     */
    orderTotalTax?: number;
    /**
     * If true, there is currently a harvest or an order change in progress. Otherwise false.
     */
    processing: boolean;
    /**
     * Contains the authorized change actions for an order
     */
    transitionLinks: LinksChangeOrderLink[];
}
