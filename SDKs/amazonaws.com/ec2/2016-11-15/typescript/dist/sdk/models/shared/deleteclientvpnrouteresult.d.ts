import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the Client VPN endpoint route.
 */
export declare enum DeleteClientVpnRouteResultStatusCodeEnum {
    Creating = "creating",
    Active = "active",
    Failed = "failed",
    Deleting = "deleting"
}
/**
 * The current state of the route.
 */
export declare class DeleteClientVpnRouteResultStatus extends SpeakeasyBase {
    code?: DeleteClientVpnRouteResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class DeleteClientVpnRouteResult extends SpeakeasyBase {
    status?: DeleteClientVpnRouteResultStatus;
}
