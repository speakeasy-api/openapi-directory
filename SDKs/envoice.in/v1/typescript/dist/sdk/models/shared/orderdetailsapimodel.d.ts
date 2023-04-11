import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
/**
 * Order status
 */
export declare enum OrderDetailsApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class OrderDetailsApiModel extends SpeakeasyBase {
    /**
     * Product short link
     */
    accessToken?: string;
    /**
     * After payment description
     */
    afterPaymentDescription?: string;
    /**
     * Coupon to apply in order to get the discount
     */
    couponCode?: string;
    currency?: CurrencyDetailsApiModel;
    /**
     * Foreign key Currency
     */
    currencyId?: number;
    /**
     * Product description
     */
    description?: string;
    /**
     * Discount amount
     */
    discountAmount?: number;
    /**
     * Order id
     */
    id?: number;
    /**
     * Product alias
     */
    name?: string;
    /**
     * Customer note to seller
     */
    note?: string;
    orderBillingDetails?: OrderBillingDetailsApiModel;
    orderShippingDetails?: OrderShippingDetailsApiModel;
    /**
     * Product id
     */
    productId?: number;
    /**
     * Represent the referral for this order
     */
    referral?: string;
    /**
     * Cost for shipping the product
     */
    shippingAmount?: number;
    /**
     * Client instructions for shipping
     */
    shippingDescription?: string;
    /**
     * Order status
     */
    status?: OrderDetailsApiModelStatusEnum;
    /**
     * Sub total amount
     */
    subTotalAmount?: number;
    /**
     * Tax amount
     */
    taxAmount?: number;
    /**
     * Total amount
     */
    totalAmount?: number;
    /**
     * Total amount with shipping
     */
    totalWithShipping?: number;
    /**
     * What happens next description
     */
    whatHappensNextDescription?: string;
}
