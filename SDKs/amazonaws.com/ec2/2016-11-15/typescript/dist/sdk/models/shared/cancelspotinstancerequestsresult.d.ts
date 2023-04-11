import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the Spot Instance request.
 */
export declare enum CancelSpotInstanceRequestsResultCancelledSpotInstanceRequestsStateEnum {
    Active = "active",
    Open = "open",
    Closed = "closed",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a request to cancel a Spot Instance.
 */
export declare class CancelSpotInstanceRequestsResultCancelledSpotInstanceRequests extends SpeakeasyBase {
    spotInstanceRequestId?: string;
    state?: CancelSpotInstanceRequestsResultCancelledSpotInstanceRequestsStateEnum;
}
/**
 * Contains the output of CancelSpotInstanceRequests.
 */
export declare class CancelSpotInstanceRequestsResult extends SpeakeasyBase {
    cancelledSpotInstanceRequests?: CancelSpotInstanceRequestsResultCancelledSpotInstanceRequests[];
}
