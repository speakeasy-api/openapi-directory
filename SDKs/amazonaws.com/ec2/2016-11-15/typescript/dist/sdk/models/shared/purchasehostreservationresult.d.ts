import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency in which the <code>totalUpfrontPrice</code> and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum PurchaseHostReservationResultCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum PurchaseHostReservationResultPurchaseCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The payment option for the reservation.
 */
export declare enum PurchaseHostReservationResultPurchasePaymentOptionEnum {
    AllUpfront = "AllUpfront",
    PartialUpfront = "PartialUpfront",
    NoUpfront = "NoUpfront"
}
/**
 * Describes the result of the purchase.
 */
export declare class PurchaseHostReservationResultPurchase extends SpeakeasyBase {
    currencyCode?: PurchaseHostReservationResultPurchaseCurrencyCodeEnum;
    duration?: number;
    hostIdSet?: string[];
    hostReservationId?: string;
    hourlyPrice?: string;
    instanceFamily?: string;
    paymentOption?: PurchaseHostReservationResultPurchasePaymentOptionEnum;
    upfrontPrice?: string;
}
/**
 * Success
 */
export declare class PurchaseHostReservationResult extends SpeakeasyBase {
    clientToken?: string;
    currencyCode?: PurchaseHostReservationResultCurrencyCodeEnum;
    purchase?: PurchaseHostReservationResultPurchase[];
    totalHourlyPrice?: string;
    totalUpfrontPrice?: string;
}
