import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The states of the listed Reserved Instances.
 */
export declare enum CreateReservedInstancesListingResultReservedInstancesListingsInstanceCountsStateEnum {
    Available = "available",
    Sold = "sold",
    Cancelled = "cancelled",
    Pending = "pending"
}
/**
 * Describes a Reserved Instance listing state.
 */
export declare class CreateReservedInstancesListingResultReservedInstancesListingsInstanceCounts extends SpeakeasyBase {
    instanceCount?: number;
    state?: CreateReservedInstancesListingResultReservedInstancesListingsInstanceCountsStateEnum;
}
/**
 * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum CreateReservedInstancesListingResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Describes the price for a Reserved Instance.
 */
export declare class CreateReservedInstancesListingResultReservedInstancesListingsPriceSchedules extends SpeakeasyBase {
    active?: boolean;
    currencyCode?: CreateReservedInstancesListingResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum;
    price?: number;
    term?: number;
}
/**
 * The status of the Reserved Instance listing.
 */
export declare enum CreateReservedInstancesListingResultReservedInstancesListingsStatusEnum {
    Active = "active",
    Pending = "pending",
    Cancelled = "cancelled",
    Closed = "closed"
}
/**
 * Describes a tag.
 */
export declare class CreateReservedInstancesListingResultReservedInstancesListingsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Reserved Instance listing.
 */
export declare class CreateReservedInstancesListingResultReservedInstancesListings extends SpeakeasyBase {
    clientToken?: string;
    createDate?: Date;
    instanceCounts?: CreateReservedInstancesListingResultReservedInstancesListingsInstanceCounts[];
    priceSchedules?: CreateReservedInstancesListingResultReservedInstancesListingsPriceSchedules[];
    reservedInstancesId?: string;
    reservedInstancesListingId?: string;
    status?: CreateReservedInstancesListingResultReservedInstancesListingsStatusEnum;
    statusMessage?: string;
    tags?: CreateReservedInstancesListingResultReservedInstancesListingsTags[];
    updateDate?: Date;
}
/**
 * Contains the output of CreateReservedInstancesListing.
 */
export declare class CreateReservedInstancesListingResult extends SpeakeasyBase {
    reservedInstancesListings?: CreateReservedInstancesListingResultReservedInstancesListings[];
}
