import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency of the offering.
 */
export declare enum DescribeHostReservationOfferingsResultOfferingSetCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * The available payment option.
 */
export declare enum DescribeHostReservationOfferingsResultOfferingSetPaymentOptionEnum {
    AllUpfront = "AllUpfront",
    PartialUpfront = "PartialUpfront",
    NoUpfront = "NoUpfront"
}
/**
 * Details about the Dedicated Host Reservation offering.
 */
export declare class DescribeHostReservationOfferingsResultOfferingSet extends SpeakeasyBase {
    currencyCode?: DescribeHostReservationOfferingsResultOfferingSetCurrencyCodeEnum;
    duration?: number;
    hourlyPrice?: string;
    instanceFamily?: string;
    offeringId?: string;
    paymentOption?: DescribeHostReservationOfferingsResultOfferingSetPaymentOptionEnum;
    upfrontPrice?: string;
}
/**
 * Success
 */
export declare class DescribeHostReservationOfferingsResult extends SpeakeasyBase {
    nextToken?: string;
    offeringSet?: DescribeHostReservationOfferingsResultOfferingSet[];
}
