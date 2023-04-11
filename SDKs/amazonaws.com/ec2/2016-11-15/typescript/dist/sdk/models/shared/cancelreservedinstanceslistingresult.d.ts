import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The states of the listed Reserved Instances.
 */
export declare enum CancelReservedInstancesListingResultReservedInstancesListingsInstanceCountsStateEnum {
    Available = "available",
    Sold = "sold",
    Cancelled = "cancelled",
    Pending = "pending"
}
/**
 * Describes a Reserved Instance listing state.
 */
export declare class CancelReservedInstancesListingResultReservedInstancesListingsInstanceCounts extends SpeakeasyBase {
    instanceCount?: number;
    state?: CancelReservedInstancesListingResultReservedInstancesListingsInstanceCountsStateEnum;
}
/**
 * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum CancelReservedInstancesListingResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Describes the price for a Reserved Instance.
 */
export declare class CancelReservedInstancesListingResultReservedInstancesListingsPriceSchedules extends SpeakeasyBase {
    active?: boolean;
    currencyCode?: CancelReservedInstancesListingResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum;
    price?: number;
    term?: number;
}
/**
 * The status of the Reserved Instance listing.
 */
export declare enum CancelReservedInstancesListingResultReservedInstancesListingsStatusEnum {
    Active = "active",
    Pending = "pending",
    Cancelled = "cancelled",
    Closed = "closed"
}
/**
 * Describes a tag.
 */
export declare class CancelReservedInstancesListingResultReservedInstancesListingsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Reserved Instance listing.
 */
export declare class CancelReservedInstancesListingResultReservedInstancesListings extends SpeakeasyBase {
    clientToken?: string;
    createDate?: Date;
    instanceCounts?: CancelReservedInstancesListingResultReservedInstancesListingsInstanceCounts[];
    priceSchedules?: CancelReservedInstancesListingResultReservedInstancesListingsPriceSchedules[];
    reservedInstancesId?: string;
    reservedInstancesListingId?: string;
    status?: CancelReservedInstancesListingResultReservedInstancesListingsStatusEnum;
    statusMessage?: string;
    tags?: CancelReservedInstancesListingResultReservedInstancesListingsTags[];
    updateDate?: Date;
}
/**
 * Contains the output of CancelReservedInstancesListing.
 */
export declare class CancelReservedInstancesListingResult extends SpeakeasyBase {
    reservedInstancesListings?: CancelReservedInstancesListingResultReservedInstancesListings[];
}
