import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { EcommerceAddress } from "./ecommerceaddress";
import { EcommerceDiscount } from "./ecommercediscount";
import { EcommerceOrderLineItem } from "./ecommerceorderlineitem";
import { EcommerceOrderStatusEnum } from "./ecommerceorderstatusenum";
import { LinkedEcommerceCustomer } from "./linkedecommercecustomer";
import { TrackingItem } from "./trackingitem";
/**
 * Current fulfillment status of the order.
 */
export declare enum EcommerceOrderFulfillmentStatusEnum {
    Pending = "pending",
    Shipped = "shipped",
    Partial = "partial",
    Delivered = "delivered",
    Cancelled = "cancelled",
    Returned = "returned",
    Unknown = "unknown"
}
/**
 * Current payment status of the order.
 */
export declare enum EcommerceOrderPaymentStatusEnum {
    Pending = "pending",
    Authorized = "authorized",
    Paid = "paid",
    Partial = "partial",
    Refunded = "refunded",
    Voided = "voided",
    Unknown = "unknown"
}
export declare class EcommerceOrder extends SpeakeasyBase {
    /**
     * An object representing a shipping or billing address.
     */
    billingAddress?: EcommerceAddress;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * The customer this entity is linked to.
     */
    customer?: LinkedEcommerceCustomer;
    discounts?: EcommerceDiscount[];
    /**
     * Current fulfillment status of the order.
     */
    fulfillmentStatus?: EcommerceOrderFulfillmentStatusEnum;
    /**
     * A unique identifier for an object.
     */
    id: string;
    lineItems?: EcommerceOrderLineItem[];
    /**
     * Note for the order.
     */
    note?: string;
    /**
     * Order number, if any.
     */
    orderNumber?: string;
    /**
     * Payment method used for this order.
     */
    paymentMethod?: string;
    /**
     * Current payment status of the order.
     */
    paymentStatus?: EcommerceOrderPaymentStatusEnum;
    /**
     * An object representing a shipping or billing address.
     */
    shippingAddress?: EcommerceAddress;
    /**
     * Shipping cost, if any.
     */
    shippingCost?: string;
    /**
     * Current status of the order.
     */
    status?: EcommerceOrderStatusEnum;
    /**
     * Sub-total amount, normally before tax.
     */
    subTotal?: string;
    /**
     * Total amount due.
     */
    totalAmount?: string;
    /**
     * Total discount, if any.
     */
    totalDiscount?: string;
    /**
     * Total tax, if any.
     */
    totalTax?: string;
    tracking?: TrackingItem[];
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
