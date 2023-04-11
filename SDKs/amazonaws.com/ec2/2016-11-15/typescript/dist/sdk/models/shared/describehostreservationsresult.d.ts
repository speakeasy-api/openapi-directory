import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum DescribeHostReservationsResultHostReservationSetCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The payment option selected for this reservation.
 */
export declare enum DescribeHostReservationsResultHostReservationSetPaymentOptionEnum {
    AllUpfront = "AllUpfront",
    PartialUpfront = "PartialUpfront",
    NoUpfront = "NoUpfront"
}
/**
 * The state of the reservation.
 */
export declare enum DescribeHostReservationsResultHostReservationSetStateEnum {
    PaymentPending = "payment-pending",
    PaymentFailed = "payment-failed",
    Active = "active",
    Retired = "retired"
}
/**
 * Describes a tag.
 */
export declare class DescribeHostReservationsResultHostReservationSetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Details about the Dedicated Host Reservation and associated Dedicated Hosts.
 */
export declare class DescribeHostReservationsResultHostReservationSet extends SpeakeasyBase {
    count?: number;
    currencyCode?: DescribeHostReservationsResultHostReservationSetCurrencyCodeEnum;
    duration?: number;
    end?: Date;
    hostIdSet?: string[];
    hostReservationId?: string;
    hourlyPrice?: string;
    instanceFamily?: string;
    offeringId?: string;
    paymentOption?: DescribeHostReservationsResultHostReservationSetPaymentOptionEnum;
    start?: Date;
    state?: DescribeHostReservationsResultHostReservationSetStateEnum;
    tags?: DescribeHostReservationsResultHostReservationSetTags[];
    upfrontPrice?: string;
}
/**
 * Success
 */
export declare class DescribeHostReservationsResult extends SpeakeasyBase {
    hostReservationSet?: DescribeHostReservationsResultHostReservationSet[];
    nextToken?: string;
}
