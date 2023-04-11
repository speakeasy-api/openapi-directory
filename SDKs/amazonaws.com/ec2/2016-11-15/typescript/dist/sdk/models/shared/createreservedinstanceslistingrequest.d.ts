import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum CreateReservedInstancesListingRequestPriceSchedulesCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Describes the price for a Reserved Instance.
 */
export declare class CreateReservedInstancesListingRequestPriceSchedules extends SpeakeasyBase {
    currencyCode?: CreateReservedInstancesListingRequestPriceSchedulesCurrencyCodeEnum;
    price?: number;
    term?: number;
}
/**
 * Contains the parameters for CreateReservedInstancesListing.
 */
export declare class CreateReservedInstancesListingRequest extends SpeakeasyBase {
    clientToken: string;
    instanceCount: number;
    priceSchedules: CreateReservedInstancesListingRequestPriceSchedules[];
    reservedInstancesId: string;
}
