import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency in which the <code>totalUpfrontPrice</code> and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum GetHostReservationPurchasePreviewResultCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum GetHostReservationPurchasePreviewResultPurchaseCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The payment option for the reservation.
 */
export declare enum GetHostReservationPurchasePreviewResultPurchasePaymentOptionEnum {
    AllUpfront = "AllUpfront",
    PartialUpfront = "PartialUpfront",
    NoUpfront = "NoUpfront"
}
/**
 * Describes the result of the purchase.
 */
export declare class GetHostReservationPurchasePreviewResultPurchase extends SpeakeasyBase {
    currencyCode?: GetHostReservationPurchasePreviewResultPurchaseCurrencyCodeEnum;
    duration?: number;
    hostIdSet?: string[];
    hostReservationId?: string;
    hourlyPrice?: string;
    instanceFamily?: string;
    paymentOption?: GetHostReservationPurchasePreviewResultPurchasePaymentOptionEnum;
    upfrontPrice?: string;
}
/**
 * Success
 */
export declare class GetHostReservationPurchasePreviewResult extends SpeakeasyBase {
    currencyCode?: GetHostReservationPurchasePreviewResultCurrencyCodeEnum;
    purchase?: GetHostReservationPurchasePreviewResultPurchase[];
    totalHourlyPrice?: string;
    totalUpfrontPrice?: string;
}
