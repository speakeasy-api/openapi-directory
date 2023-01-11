import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the route.
**/
export declare class CreateClientVpnRouteResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class CreateClientVpnRouteResult extends SpeakeasyBase {
    status?: CreateClientVpnRouteResultStatus;
}
