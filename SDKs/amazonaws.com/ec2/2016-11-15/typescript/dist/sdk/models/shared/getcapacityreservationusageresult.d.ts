import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Capacity Reservation usage.
 */
export declare class GetCapacityReservationUsageResultInstanceUsages extends SpeakeasyBase {
    accountId?: string;
    usedInstanceCount?: number;
}
/**
 * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p> <ul> <li> <p> <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p> </li> <li> <p> <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p> </li> <li> <p> <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters, capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p> </li> </ul>
 */
export declare enum GetCapacityReservationUsageResultStateEnum {
    Active = "active",
    Expired = "expired",
    Cancelled = "cancelled",
    Pending = "pending",
    Failed = "failed"
}
/**
 * Success
 */
export declare class GetCapacityReservationUsageResult extends SpeakeasyBase {
    availableInstanceCount?: number;
    capacityReservationId?: string;
    instanceType?: string;
    instanceUsages?: GetCapacityReservationUsageResultInstanceUsages[];
    nextToken?: string;
    state?: GetCapacityReservationUsageResultStateEnum;
    totalInstanceCount?: number;
}
