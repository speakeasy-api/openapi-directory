import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PaymentCard, PaymentCardInput } from "./paymentcard";
import { PhoneNumber } from "./phonenumber";
import { ServiceCharge, ServiceChargeInput } from "./servicecharge";
export declare class OrderCustomers extends SpeakeasyBase {
    emails?: Email[];
    firstName?: string;
    id?: string;
    lastName?: string;
    middleName?: string;
    phoneNumbers?: PhoneNumber[];
}
export declare enum OrderDiscountsScopeEnum {
    Order = "order",
    LineItem = "line_item"
}
export declare enum OrderDiscountsTypeEnum {
    Percentage = "percentage",
    FlatFee = "flat_fee"
}
export declare class OrderDiscountsInput extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    name?: string;
    scope?: OrderDiscountsScopeEnum;
    type?: OrderDiscountsTypeEnum;
}
/**
 * Specific details for curbside pickup.
 */
export declare class OrderFulfillmentsPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
    /**
     * Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    buyerArrivedAt?: Date;
    /**
     * Specific details for curbside pickup, such as parking number and vehicle model.
     */
    curbsideDetails?: string;
}
export declare class OrderFulfillmentsPickupDetailsRecipient extends SpeakeasyBase {
    address?: Address;
    customerId?: string;
    displayName?: string;
    email?: Email;
    phoneNumber?: PhoneNumber;
}
/**
 * The schedule type of the pickup fulfillment.
 */
export declare enum OrderFulfillmentsPickupDetailsScheduleTypeEnum {
    Scheduled = "scheduled"
}
export declare class OrderFulfillmentsPickupDetailsInput extends SpeakeasyBase {
    /**
     * The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').
     */
    autoCompleteDuration?: string;
    /**
     * A description of why the pickup was canceled.
     */
    cancelReason?: string;
    /**
     * Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    canceledAt?: Date;
    /**
     * Specific details for curbside pickup.
     */
    curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
    /**
     * Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    expiredAt?: Date;
    /**
     * Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.
     * If `expires_at` is not set, this pickup fulfillment is automatically accepted when
     * placed.
     */
    expiresAt?: Date;
    /**
     * If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.
     */
    isCurbsidePickup?: boolean;
    /**
     * A note meant to provide additional instructions about the pickup
     *
     * @remarks
     * fulfillment displayed in the Square Point of Sale application and set by the API.
     */
    note?: string;
    /**
     * Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    pickedUpAt?: Date;
    /**
     * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
     *
     * @remarks
     * "2016-09-04T23:59:33.123Z".
     *
     * For fulfillments with the schedule type `ASAP`, this is automatically set
     * to the current time plus the expected duration to prepare the fulfillment.
     */
    pickupAt?: Date;
    /**
     * The window of time in which the order should be picked up after the `pickup_at` timestamp.
     *
     * @remarks
     * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
     * informational guideline for merchants.
     */
    pickupWindowDuration?: string;
    /**
     * Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    placedAt?: Date;
    /**
     * The duration of time it takes to prepare this fulfillment.
     *
     * @remarks
     * The duration must be in RFC 3339 format (for example, "P1W3D").
     */
    prepTimeDuration?: string;
    /**
     * Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    readyAt?: Date;
    recipient?: OrderFulfillmentsPickupDetailsRecipient;
    /**
     * Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    rejectedAt?: Date;
    /**
     * The schedule type of the pickup fulfillment.
     */
    scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}
/**
 * The state of the fulfillment.
 */
export declare enum OrderFulfillmentsFulfillmentStatusEnum {
    Proposed = "proposed",
    Reserved = "reserved",
    Prepared = "prepared",
    Completed = "completed",
    Cancelled = "cancelled",
    Failed = "failed",
    Other = "other"
}
export declare enum OrderFulfillmentsTypeEnum {
    Pickup = "pickup",
    Shipment = "shipment"
}
export declare class OrderFulfillmentsInput extends SpeakeasyBase {
    id?: string;
    pickupDetails?: OrderFulfillmentsPickupDetailsInput;
    shipmentDetails?: Record<string, any>;
    /**
     * The state of the fulfillment.
     */
    status?: OrderFulfillmentsFulfillmentStatusEnum;
    type?: OrderFulfillmentsTypeEnum;
}
export declare class OrderLineItemsAppliedDiscountsInput extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    discountId?: string;
}
export declare class OrderLineItemsAppliedTaxesInput extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    taxId?: string;
}
export declare class OrderLineItemsModifiers extends SpeakeasyBase {
    alternateName?: string;
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    id?: string;
    modifierGroupId?: string;
    name?: string;
}
export declare class OrderLineItemsInput extends SpeakeasyBase {
    appliedDiscounts?: OrderLineItemsAppliedDiscountsInput[];
    appliedTaxes?: OrderLineItemsAppliedTaxesInput[];
    /**
     * Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts
     */
    modifiers?: OrderLineItemsModifiers[];
    name?: string;
    quantity?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalTax?: number;
    unitPrice?: number;
}
/**
 * Is this order paid or not?
 */
export declare enum OrderPosPaymentStatusEnum {
    Open = "open",
    Paid = "paid",
    Refunded = "refunded",
    Credited = "credited",
    PartiallyPaid = "partially_paid",
    PartiallyRefunded = "partially_refunded",
    Unknown = "unknown"
}
export declare class OrderPaymentsInput extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
}
export declare enum OrderRefundsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Failed = "failed"
}
export declare class OrderRefundsInput extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    reason?: string;
    status?: OrderRefundsStatusEnum;
}
/**
 * Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()
 */
export declare enum OrderStatusEnum {
    Open = "open",
    Draft = "draft",
    Delivered = "delivered",
    Delayed = "delayed",
    Voided = "voided",
    Completed = "completed",
    Hidden = "hidden"
}
export declare enum OrderTaxesScopeEnum {
    Order = "order",
    LineItem = "line_item"
}
export declare enum OrderTaxesTypeEnum {
    Unknown = "unknown",
    Additive = "additive",
    Inclusive = "inclusive"
}
export declare class OrderTaxes extends SpeakeasyBase {
    amount?: number;
    /**
     * Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]()
     */
    autoApplied?: boolean;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    id?: string;
    /**
     * The tax's name.
     */
    name?: string;
    percentage?: number;
    scope?: OrderTaxesScopeEnum;
    type?: OrderTaxesTypeEnum;
}
/**
 * The entry method of the card. Only applicable when the tender type is card.
 */
export declare enum OrderTendersCardEntryMethodEnum {
    Evm = "evm",
    Swiped = "swiped",
    Keyed = "keyed",
    OnFile = "on-file",
    Contactless = "contactless"
}
/**
 * The status of the card. Only applicable when the tender type is card.
 */
export declare enum OrderTendersCardStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Failed = "failed",
    Voided = "voided"
}
export declare enum OrderTendersTypeEnum {
    Cash = "cash",
    Card = "card",
    Other = "other"
}
export declare class OrderTendersInput extends SpeakeasyBase {
    amount?: number;
    /**
     * The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.
     */
    buyerTenderedCashAmount?: number;
    /**
     * A card's non-confidential details.
     */
    card?: PaymentCardInput;
    /**
     * The entry method of the card. Only applicable when the tender type is card.
     */
    cardEntryMethod?: OrderTendersCardEntryMethodEnum;
    /**
     * The status of the card. Only applicable when the tender type is card.
     */
    cardStatus?: OrderTendersCardStatusEnum;
    /**
     * The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.
     */
    changeBackCashAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    name?: string;
    note?: string;
    percentage?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalProcessingFee?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    type?: OrderTendersTypeEnum;
}
export declare class OrderInput extends SpeakeasyBase {
    closedDate?: Date;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customerId?: string;
    customers?: OrderCustomers[];
    discounts?: OrderDiscountsInput[];
    employeeId?: string;
    fulfillments?: OrderFulfillmentsInput[];
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    lineItems?: OrderLineItemsInput[];
    locationId: string;
    merchantId: string;
    /**
     * A note with information about this order, may be printed on the order receipt and displayed in apps
     */
    note?: string;
    orderDate?: Date;
    orderNumber?: string;
    orderTypeId?: string;
    /**
     * Is this order paid or not?
     */
    paymentStatus?: OrderPosPaymentStatusEnum;
    payments?: OrderPaymentsInput[];
    /**
     * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
     */
    referenceId?: string;
    refunded?: boolean;
    refunds?: OrderRefundsInput[];
    seat?: string;
    /**
     * Optional service charges or gratuity tip applied to the order.
     */
    serviceCharges?: ServiceChargeInput[];
    /**
     * Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()
     */
    status?: OrderStatusEnum;
    table?: string;
    taxes?: OrderTaxes[];
    tenders?: OrderTendersInput[];
    title?: string;
    totalAmount?: number;
    totalDiscount?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    version?: string;
    voided?: boolean;
}
export declare class OrderDiscounts extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    name?: string;
    /**
     * A unique identifier for an object.
     */
    productId?: string;
    scope?: OrderDiscountsScopeEnum;
    type?: OrderDiscountsTypeEnum;
}
export declare class OrderFulfillmentsPickupDetails extends SpeakeasyBase {
    acceptedAt?: Date;
    /**
     * The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').
     */
    autoCompleteDuration?: string;
    /**
     * A description of why the pickup was canceled.
     */
    cancelReason?: string;
    /**
     * Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    canceledAt?: Date;
    /**
     * Specific details for curbside pickup.
     */
    curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
    /**
     * Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    expiredAt?: Date;
    /**
     * Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.
     * If `expires_at` is not set, this pickup fulfillment is automatically accepted when
     * placed.
     */
    expiresAt?: Date;
    /**
     * If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.
     */
    isCurbsidePickup?: boolean;
    /**
     * A note meant to provide additional instructions about the pickup
     *
     * @remarks
     * fulfillment displayed in the Square Point of Sale application and set by the API.
     */
    note?: string;
    /**
     * Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    pickedUpAt?: Date;
    /**
     * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
     *
     * @remarks
     * "2016-09-04T23:59:33.123Z".
     *
     * For fulfillments with the schedule type `ASAP`, this is automatically set
     * to the current time plus the expected duration to prepare the fulfillment.
     */
    pickupAt?: Date;
    /**
     * The window of time in which the order should be picked up after the `pickup_at` timestamp.
     *
     * @remarks
     * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
     * informational guideline for merchants.
     */
    pickupWindowDuration?: string;
    /**
     * Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    placedAt?: Date;
    /**
     * The duration of time it takes to prepare this fulfillment.
     *
     * @remarks
     * The duration must be in RFC 3339 format (for example, "P1W3D").
     */
    prepTimeDuration?: string;
    /**
     * Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    readyAt?: Date;
    recipient?: OrderFulfillmentsPickupDetailsRecipient;
    /**
     * Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
     *
     * @remarks
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    rejectedAt?: Date;
    /**
     * The schedule type of the pickup fulfillment.
     */
    scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}
export declare class OrderFulfillments extends SpeakeasyBase {
    id?: string;
    pickupDetails?: OrderFulfillmentsPickupDetails;
    shipmentDetails?: Record<string, any>;
    /**
     * The state of the fulfillment.
     */
    status?: OrderFulfillmentsFulfillmentStatusEnum;
    type?: OrderFulfillmentsTypeEnum;
}
export declare class OrderLineItemsAppliedDiscounts extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    discountId?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
}
export declare class OrderLineItemsAppliedTaxes extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    taxId?: string;
}
export declare class OrderLineItemsItem extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
}
export declare class OrderLineItems extends SpeakeasyBase {
    appliedDiscounts?: OrderLineItemsAppliedDiscounts[];
    appliedTaxes?: OrderLineItemsAppliedTaxes[];
    /**
     * A unique identifier for an object.
     */
    id?: string;
    item?: OrderLineItemsItem;
    /**
     * Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts
     */
    modifiers?: OrderLineItemsModifiers[];
    name?: string;
    quantity?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalTax?: number;
    unitPrice?: number;
}
export declare class OrderPayments extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
}
export declare class OrderRefunds extends SpeakeasyBase {
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * A unique identifier for an object.
     */
    locationId?: string;
    reason?: string;
    status?: OrderRefundsStatusEnum;
    /**
     * A unique identifier for an object.
     */
    tenderId?: string;
    /**
     * A unique identifier for an object.
     */
    transactionId?: string;
}
/**
 * Source of order. Indicates the way that the order was placed.
 */
export declare enum OrderSourceEnum {
    InStore = "in-store",
    Online = "online",
    Opt = "opt",
    Api = "api",
    Kiosk = "kiosk",
    CallerId = "caller-id",
    Google = "google",
    Invoice = "invoice"
}
export declare class OrderTenders extends SpeakeasyBase {
    amount?: number;
    /**
     * The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.
     */
    buyerTenderedCashAmount?: number;
    /**
     * A card's non-confidential details.
     */
    card?: PaymentCard;
    /**
     * The entry method of the card. Only applicable when the tender type is card.
     */
    cardEntryMethod?: OrderTendersCardEntryMethodEnum;
    /**
     * The status of the card. Only applicable when the tender type is card.
     */
    cardStatus?: OrderTendersCardStatusEnum;
    /**
     * The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.
     */
    changeBackCashAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * A unique identifier for an object.
     */
    locationId?: string;
    name?: string;
    note?: string;
    /**
     * A unique identifier for an object.
     */
    paymentId?: string;
    percentage?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalProcessingFee?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    /**
     * A unique identifier for an object.
     */
    transactionId?: string;
    type?: OrderTendersTypeEnum;
}
export declare class Order extends SpeakeasyBase {
    closedDate?: Date;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customerId?: string;
    customers?: OrderCustomers[];
    discounts?: OrderDiscounts[];
    employeeId?: string;
    fulfillments?: OrderFulfillments[];
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    lineItems?: OrderLineItems[];
    locationId: string;
    merchantId: string;
    /**
     * A note with information about this order, may be printed on the order receipt and displayed in apps
     */
    note?: string;
    orderDate?: Date;
    orderNumber?: string;
    orderTypeId?: string;
    /**
     * Is this order paid or not?
     */
    paymentStatus?: OrderPosPaymentStatusEnum;
    payments?: OrderPayments[];
    /**
     * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
     */
    referenceId?: string;
    refunded?: boolean;
    refunds?: OrderRefunds[];
    seat?: string;
    /**
     * Optional service charges or gratuity tip applied to the order.
     */
    serviceCharges?: ServiceCharge[];
    /**
     * Source of order. Indicates the way that the order was placed.
     */
    source?: OrderSourceEnum;
    /**
     * Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()
     */
    status?: OrderStatusEnum;
    table?: string;
    taxes?: OrderTaxes[];
    tenders?: OrderTenders[];
    title?: string;
    totalAmount?: number;
    totalDiscount?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    version?: string;
    voided?: boolean;
    voidedAt?: Date;
}
