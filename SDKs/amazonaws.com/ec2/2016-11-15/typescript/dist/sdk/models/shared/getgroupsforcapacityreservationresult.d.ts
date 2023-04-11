import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a resource group to which a Capacity Reservation has been added.
 */
export declare class GetGroupsForCapacityReservationResultCapacityReservationGroups extends SpeakeasyBase {
    groupArn?: string;
    ownerId?: string;
}
/**
 * Success
 */
export declare class GetGroupsForCapacityReservationResult extends SpeakeasyBase {
    capacityReservationGroups?: GetGroupsForCapacityReservationResultCapacityReservationGroups[];
    nextToken?: string;
}
