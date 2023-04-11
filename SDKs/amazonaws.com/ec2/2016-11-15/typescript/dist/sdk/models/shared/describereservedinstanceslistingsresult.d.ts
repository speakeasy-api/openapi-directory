import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The states of the listed Reserved Instances.
 */
export declare enum DescribeReservedInstancesListingsResultReservedInstancesListingsInstanceCountsStateEnum {
    Available = "available",
    Sold = "sold",
    Cancelled = "cancelled",
    Pending = "pending"
}
/**
 * Describes a Reserved Instance listing state.
 */
export declare class DescribeReservedInstancesListingsResultReservedInstancesListingsInstanceCounts extends SpeakeasyBase {
    instanceCount?: number;
    state?: DescribeReservedInstancesListingsResultReservedInstancesListingsInstanceCountsStateEnum;
}
/**
 * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum DescribeReservedInstancesListingsResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Describes the price for a Reserved Instance.
 */
export declare class DescribeReservedInstancesListingsResultReservedInstancesListingsPriceSchedules extends SpeakeasyBase {
    active?: boolean;
    currencyCode?: DescribeReservedInstancesListingsResultReservedInstancesListingsPriceSchedulesCurrencyCodeEnum;
    price?: number;
    term?: number;
}
/**
 * The status of the Reserved Instance listing.
 */
export declare enum DescribeReservedInstancesListingsResultReservedInstancesListingsStatusEnum {
    Active = "active",
    Pending = "pending",
    Cancelled = "cancelled",
    Closed = "closed"
}
/**
 * Describes a tag.
 */
export declare class DescribeReservedInstancesListingsResultReservedInstancesListingsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Reserved Instance listing.
 */
export declare class DescribeReservedInstancesListingsResultReservedInstancesListings extends SpeakeasyBase {
    clientToken?: string;
    createDate?: Date;
    instanceCounts?: DescribeReservedInstancesListingsResultReservedInstancesListingsInstanceCounts[];
    priceSchedules?: DescribeReservedInstancesListingsResultReservedInstancesListingsPriceSchedules[];
    reservedInstancesId?: string;
    reservedInstancesListingId?: string;
    status?: DescribeReservedInstancesListingsResultReservedInstancesListingsStatusEnum;
    statusMessage?: string;
    tags?: DescribeReservedInstancesListingsResultReservedInstancesListingsTags[];
    updateDate?: Date;
}
/**
 * Contains the output of DescribeReservedInstancesListings.
 */
export declare class DescribeReservedInstancesListingsResult extends SpeakeasyBase {
    reservedInstancesListings?: DescribeReservedInstancesListingsResultReservedInstancesListings[];
}
