import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAttachmentApiModel } from "./orderattachmentapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
/**
 * Order status
 */
export declare enum OrderCreateApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class OrderCreateApiModel extends SpeakeasyBase {
    /**
     * After payment description
     */
    afterPaymentDescription?: string;
    /**
     * List of Order attachments
     */
    attachments?: OrderAttachmentApiModel[];
    /**
     * Coupon to apply in order to get the discount
     */
    couponCode?: string;
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
     * List of Order items
     */
    items?: OrderItemApiModel[];
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
    status?: OrderCreateApiModelStatusEnum;
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
     * What happens next description
     */
    whatHappensNextDescription?: string;
}
