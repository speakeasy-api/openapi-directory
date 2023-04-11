import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the Client VPN endpoint route.
 */
export declare enum CreateClientVpnRouteResultStatusCodeEnum {
    Creating = "creating",
    Active = "active",
    Failed = "failed",
    Deleting = "deleting"
}
/**
 * The current state of the route.
 */
export declare class CreateClientVpnRouteResultStatus extends SpeakeasyBase {
    code?: CreateClientVpnRouteResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class CreateClientVpnRouteResult extends SpeakeasyBase {
    status?: CreateClientVpnRouteResultStatus;
}
