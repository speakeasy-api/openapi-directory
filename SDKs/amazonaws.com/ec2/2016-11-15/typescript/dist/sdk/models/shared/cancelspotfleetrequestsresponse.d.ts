import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the Spot Fleet request.
 */
export declare enum CancelSpotFleetRequestsResponseSuccessfulFleetRequestsCurrentSpotFleetRequestStateEnum {
    Submitted = "submitted",
    Active = "active",
    Cancelled = "cancelled",
    Failed = "failed",
    CancelledRunning = "cancelled_running",
    CancelledTerminating = "cancelled_terminating",
    Modifying = "modifying"
}
/**
 * The previous state of the Spot Fleet request.
 */
export declare enum CancelSpotFleetRequestsResponseSuccessfulFleetRequestsPreviousSpotFleetRequestStateEnum {
    Submitted = "submitted",
    Active = "active",
    Cancelled = "cancelled",
    Failed = "failed",
    CancelledRunning = "cancelled_running",
    CancelledTerminating = "cancelled_terminating",
    Modifying = "modifying"
}
/**
 * Describes a Spot Fleet request that was successfully canceled.
 */
export declare class CancelSpotFleetRequestsResponseSuccessfulFleetRequests extends SpeakeasyBase {
    currentSpotFleetRequestState?: CancelSpotFleetRequestsResponseSuccessfulFleetRequestsCurrentSpotFleetRequestStateEnum;
    previousSpotFleetRequestState?: CancelSpotFleetRequestsResponseSuccessfulFleetRequestsPreviousSpotFleetRequestStateEnum;
    spotFleetRequestId?: string;
}
/**
 * The error code.
 */
export declare enum CancelSpotFleetRequestsResponseUnsuccessfulFleetRequestsErrorCodeEnum {
    FleetRequestIdDoesNotExist = "fleetRequestIdDoesNotExist",
    FleetRequestIdMalformed = "fleetRequestIdMalformed",
    FleetRequestNotInCancellableState = "fleetRequestNotInCancellableState",
    UnexpectedError = "unexpectedError"
}
/**
 * The error.
 */
export declare class CancelSpotFleetRequestsResponseUnsuccessfulFleetRequestsError extends SpeakeasyBase {
    code?: CancelSpotFleetRequestsResponseUnsuccessfulFleetRequestsErrorCodeEnum;
    message?: string;
}
/**
 * Describes a Spot Fleet request that was not successfully canceled.
 */
export declare class CancelSpotFleetRequestsResponseUnsuccessfulFleetRequests extends SpeakeasyBase {
    error?: CancelSpotFleetRequestsResponseUnsuccessfulFleetRequestsError;
    spotFleetRequestId?: string;
}
/**
 * Contains the output of CancelSpotFleetRequests.
 */
export declare class CancelSpotFleetRequestsResponse extends SpeakeasyBase {
    successfulFleetRequests?: CancelSpotFleetRequestsResponseSuccessfulFleetRequests[];
    unsuccessfulFleetRequests?: CancelSpotFleetRequestsResponseUnsuccessfulFleetRequests[];
}
