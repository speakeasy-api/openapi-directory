import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the EC2 Fleet.
 */
export declare enum DeleteFleetsResultSuccessfulFleetDeletionsCurrentFleetStateEnum {
    Submitted = "submitted",
    Active = "active",
    Deleted = "deleted",
    Failed = "failed",
    DeletedRunning = "deleted_running",
    DeletedTerminating = "deleted_terminating",
    Modifying = "modifying"
}
/**
 * The previous state of the EC2 Fleet.
 */
export declare enum DeleteFleetsResultSuccessfulFleetDeletionsPreviousFleetStateEnum {
    Submitted = "submitted",
    Active = "active",
    Deleted = "deleted",
    Failed = "failed",
    DeletedRunning = "deleted_running",
    DeletedTerminating = "deleted_terminating",
    Modifying = "modifying"
}
/**
 * Describes an EC2 Fleet that was successfully deleted.
 */
export declare class DeleteFleetsResultSuccessfulFleetDeletions extends SpeakeasyBase {
    currentFleetState?: DeleteFleetsResultSuccessfulFleetDeletionsCurrentFleetStateEnum;
    fleetId?: string;
    previousFleetState?: DeleteFleetsResultSuccessfulFleetDeletionsPreviousFleetStateEnum;
}
/**
 * The error code.
 */
export declare enum DeleteFleetsResultUnsuccessfulFleetDeletionsErrorCodeEnum {
    FleetIdDoesNotExist = "fleetIdDoesNotExist",
    FleetIdMalformed = "fleetIdMalformed",
    FleetNotInDeletableState = "fleetNotInDeletableState",
    UnexpectedError = "unexpectedError"
}
/**
 * The error.
 */
export declare class DeleteFleetsResultUnsuccessfulFleetDeletionsError extends SpeakeasyBase {
    code?: DeleteFleetsResultUnsuccessfulFleetDeletionsErrorCodeEnum;
    message?: string;
}
/**
 * Describes an EC2 Fleet that was not successfully deleted.
 */
export declare class DeleteFleetsResultUnsuccessfulFleetDeletions extends SpeakeasyBase {
    error?: DeleteFleetsResultUnsuccessfulFleetDeletionsError;
    fleetId?: string;
}
/**
 * Success
 */
export declare class DeleteFleetsResult extends SpeakeasyBase {
    successfulFleetDeletions?: DeleteFleetsResultSuccessfulFleetDeletions[];
    unsuccessfulFleetDeletions?: DeleteFleetsResultUnsuccessfulFleetDeletions[];
}
